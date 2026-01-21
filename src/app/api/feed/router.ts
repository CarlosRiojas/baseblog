import { NextResponse } from "next/server"; 
import { getLatestPosts } from "@/../sanity/lib/posts";

export async function GET() {
  const posts = await getLatestPosts();

    return NextResponse.json({
        source: 'blog',
        items: posts
    });
}