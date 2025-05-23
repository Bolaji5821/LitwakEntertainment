import { NextResponse } from 'next/server';
import { BlogModel } from '@/models/index.js';
import { authMiddleware, authorize } from '@/lib/auth.js';

// Middleware to protect routes
const withProtection = (handler, roles = []) => {
    return async(req) => {
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

            // Call the handler with the authenticated request
            return handler({...req, user: context.user });
        } catch (error) {
            return NextResponse.json({ message: 'Authentication error', error: error.message }, { status: 500 });
        }
    };
};

// GET all blogs
export async function GET(request) {
    try {
        const blogs = await BlogModel.findAll({
            where: { isPublished: true },
            order: [
                ['publishedAt', 'DESC']
            ]
        });

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ message: 'Failed to fetch blogs', error: error.message }, { status: 500 });
    }
}

// POST create a new blog
export const POST = withProtection(async(request) => {
    try {
        const { title, content, excerpt, imageUrl, category, author } = await request.json();

        if (!title || !content) {
            return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
        }

        // Generate slug from title
        const slug = title
            .toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-');

        // Create blog
        const blog = await BlogModel.create({
            title,
            slug,
            content,
            excerpt,
            imageUrl,
            category,
            author,
            userId: request.user.id,
            isPublished: false
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ message: 'Failed to create blog', error: error.message }, { status: 500 });
    }
}, ['admin', 'editor']);