import { NextResponse } from 'next/server';
import { BlogModel } from '../../../../models/index.js';
import { authMiddleware, authorize } from '../../../../lib/auth';

// Middleware to protect routes
const withProtection = (handler, roles = []) => {
    return async(req, { params }) => {
        try {
            // Mock request and response objects for middleware
            const mockRes = {
                status: (code) => ({
                    json: (data) => NextResponse.json(data, { status: code })
                })
            };

            // Create a context to store user data
            const context = { user: null };

            // Apply middleware
            await new Promise((resolve) => {
                authMiddleware({...req, headers: req.headers },
                    mockRes,
                    () => {
                        context.user = req.user;
                        resolve();
                    }
                );
            });

            // If roles are specified, check authorization
            if (roles.length > 0) {
                await new Promise((resolve) => {
                    authorize(roles)({...req, user: context.user },
                        mockRes,
                        () => {
                            resolve();
                        }
                    );
                });
            }

            // Call the handler with the authenticated request and params
            return handler({...req, user: context.user }, { params });
        } catch (error) {
            return NextResponse.json({ message: 'Authentication error', error: error.message }, { status: 500 });
        }
    };
};

// GET blog by slug
export async function GET(request, { params }) {
    try {
        const { slug } = params;

        const blog = await BlogModel.findOne({
            where: { slug, isPublished: true }
        });

        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ message: 'Failed to fetch blog', error: error.message }, { status: 500 });
    }
}

// PUT update blog by slug
export const PUT = withProtection(async(request, { params }) => {
    try {
        const { slug } = params;
        const { title, content, excerpt, imageUrl, category, author, isPublished } = await request.json();

        const blog = await BlogModel.findOne({ where: { slug } });

        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        // Check if user is authorized to update this blog
        if (blog.userId !== request.user.id && request.user.role !== 'admin') {
            return NextResponse.json({ message: 'Not authorized to update this blog' }, { status: 403 });
        }

        // Update blog
        await blog.update({
            title: title || blog.title,
            content: content || blog.content,
            excerpt: excerpt !== undefined ? excerpt : blog.excerpt,
            imageUrl: imageUrl !== undefined ? imageUrl : blog.imageUrl,
            category: category !== undefined ? category : blog.category,
            author: author !== undefined ? author : blog.author,
            isPublished: isPublished !== undefined ? isPublished : blog.isPublished,
            publishedAt: isPublished && !blog.isPublished ? new Date() : blog.publishedAt
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ message: 'Failed to update blog', error: error.message }, { status: 500 });
    }
}, ['admin', 'editor']);

// DELETE blog by slug
export const DELETE = withProtection(async(request, { params }) => {
    try {
        const { slug } = params;

        const blog = await BlogModel.findOne({ where: { slug } });

        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        // Check if user is authorized to delete this blog
        if (blog.userId !== request.user.id && request.user.role !== 'admin') {
            return NextResponse.json({ message: 'Not authorized to delete this blog' }, { status: 403 });
        }

        // Delete blog
        await blog.destroy();

        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ message: 'Failed to delete blog', error: error.message }, { status: 500 });
    }
}, ['admin', 'editor']);