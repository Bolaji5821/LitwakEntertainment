import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/components/Banner';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

// This would typically come from a database or API
const getBlogPost = (slug) => {
    const posts = {
        'behind-the-scenes-music-video': {
            title: "Behind the Scenes at Our Latest Music Video Shoot",
            excerpt: "Get an exclusive look at what happens behind the camera during our high-energy music video production.",
            date: "2023-05-15",
            image: "https://images.pexels.com/photos/3755378/pexels-photo-3755378.jpeg",
            author: "Alex Johnson",
            category: "Production",
            content: `
        <p>The sun was barely peeking over the horizon when our team arrived at the abandoned warehouse that would serve as the primary location for our latest music video shoot. The cast and crew were buzzing with excitement, knowing that the day ahead would be intense but rewarding.</p>
        
        <h2>The Vision</h2>
        <p>Our director, Sarah Chen, had a clear vision for the video - a post-apocalyptic setting where music becomes the catalyst for rebirth and renewal. The abandoned warehouse, with its graffiti-covered walls and industrial aesthetic, provided the perfect backdrop for this narrative.</p>
        
        <p>The preparation for this shoot had been weeks in the making. Our set designers had transformed the space, adding strategic lighting, smoke machines, and props that enhanced the dystopian feel without overshadowing the performers.</p>
        
        <h2>The Technical Setup</h2>
        <p>One of the most challenging aspects of the shoot was the technical setup. We used a combination of static cameras, drones, and handheld rigs to capture various perspectives. The lighting design was particularly complex, with multiple color palettes used to represent different emotional states throughout the video.</p>
        
        <p>Our cinematographer, James Wilson, opted for a RED Digital Cinema camera for its exceptional dynamic range, allowing us to capture details even in the most challenging lighting conditions. This was crucial for maintaining the video's gritty aesthetic while ensuring that the artists remained the focal point.</p>
        
        <h2>The Performance</h2>
        <p>The artists arrived mid-morning and spent time in hair and makeup while the technical team finalized the first setup. When they stepped onto the set, the energy immediately shifted. Despite the long hours and multiple takes, their energy never waned. It was inspiring to watch them embody the music so completely, bringing to life the emotions and story we wanted to convey.</p>
        
        <p>We shot several performance sequences and narrative vignettes throughout the day, gradually working our way through the storyboard that had been meticulously planned weeks in advance.</p>
        
        <h2>The Challenges</h2>
        <p>No production is without its challenges. Midway through the day, one of our key lighting fixtures malfunctioned, creating a delay in the schedule. The team quickly regrouped, reworked the shot list, and continued with alternate scenes while the equipment was repaired.</p>
        
        <p>The warehouse, while perfect aesthetically, presented some acoustic challenges that our sound engineer had to navigate. We ended up recording much of the audio separately to ensure pristine quality.</p>
        
        <h2>The Magic</h2>
        <p>Despite the challenges, there were moments of pure magic throughout the day. During one particular scene, the lighting, performance, and camera movement aligned so perfectly that the entire crew fell silent, knowing we had captured something special.</p>
        
        <p>As the day wrapped and we reviewed the footage, it became clear that all the planning, creativity, and hard work had paid off. The raw footage already conveyed the emotion and energy we had envisioned.</p>
        
        <h2>Post-Production</h2>
        <p>The journey doesn't end with the shoot. The footage now moves to our post-production team, who will spend the next few weeks editing, color grading, and adding visual effects to enhance the narrative. This process is just as creative and critical as the shoot itself.</p>
        
        <p>We can't wait to share the final product with you all. Stay tuned for the release, coming to all platforms next month!</p>
        
        <p>A special thanks to our incredible cast and crew who poured their hearts and expertise into making this vision a reality.</p>
      `
        }
    };

    return posts[slug] || null;
};

// Add this function to generate static paths
export async function generateStaticParams() {
    // Get all available blog post slugs
    const posts = {
        'behind-the-scenes-music-video': {},
        // Add any other blog post slugs here
    };

    return Object.keys(posts).map((slug) => ({
        slug: slug,
    }));
}

export default function BlogPostPage({ params }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return <div > Post not found < /div>;
    }

    return ( <
        div >
        <
        Banner title = { post.title }
        image = { post.image }
        />

        <
        div className = "bg-purple-950 py-16 px-4" >
        <
        div className = "container mx-auto max-w-4xl" >
        <
        Link href = "/blog"
        className = "inline-flex items-center text-purple-400 hover:text-purple-300 mb-8" >
        <
        ArrowLeft className = "w-4 h-4 mr-2" / >
        Back to Blog <
        /Link>

        <
        div className = "bg-purple-900/40 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8" >
        <
        div className = "flex flex-wrap justify-between items-center mb-8 pb-8 border-b border-purple-800" >
        <
        div >
        <
        span className = "text-purple-400 block mb-2" > { formatDate(post.date) } <
        /span> <
        h1 className = "text-2xl md:text-3xl lg:text-4xl font-bold text-white" > { post.title } < /h1> < /
        div > <
        div className = "mt-4 md:mt-0" >
        <
        span className = "inline-block bg-purple-800 text-white px-3 py-1 rounded-full text-sm" > { post.category } <
        /span> < /
        div > <
        /div>

        <
        div className = "prose prose-invert prose-purple max-w-none" >
        <
        div dangerouslySetInnerHTML = {
            { __html: post.content }
        }
        /> < /
        div >

        <
        div className = "mt-12 pt-8 border-t border-purple-800" >
        <
        div className = "flex items-center" >
        <
        div className = "w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-xl" > { post.author.charAt(0) } <
        /div> <
        div className = "ml-4" >
        <
        p className = "text-white font-medium" > Written by < /p> <
        p className = "text-purple-400" > { post.author } < /p> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >
    );
}