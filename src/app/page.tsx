import { getLatestPosts } from '@/../sanity/lib/posts'
import type { Post } from '@/../sanity/lib/types'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/../sanity/lib/image'
import ThemeToggle from './component/ThemeToggle'
import dryoBg from '@/assets/dryobg.png';


const portableTextComponents = {
  types: {
    youtube: ({ value }: { value: unknown }) => {
      if (
        typeof value !== 'object' ||
        value === null ||
        !('url' in value)
      ) {
        return null
      }

      const url = String((value as { url: string }).url)

      const id =
        url.includes('youtu.be/')
          ? url.split('youtu.be/')[1]
          : url.split('v=')[1]?.split('&')[0]

      if (!id) return null


      return (
        <div style={{ margin: '24px 0', aspectRatio: '16 / 9' }}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
  },
}

export default async function Home() {
  const posts: Post[] = await getLatestPosts()

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ThemeToggle />
      <div style={{ width: '100%', maxWidth: 720, padding: 24 }}>
       <img
 src= {dryoBg.src}
  alt="TGMdryo PB BASEBlog"
  style={{
    display: 'inline-block',
    padding: 5,
    maxWidth: '100%',
    height: 'auto',
  }}
/>

        {posts.length === 0 && <p>No posts yet.</p>}

        <ul>
          {posts.map((post) => (
            <li key={post.slug?.current ?? post.title}>
              <strong>{post.title}</strong>
              {post.excerpt && <p>{post.excerpt}</p>}
              <div>{post.body && <PortableText 
                          value={post.body}
                           components={portableTextComponents} />}</div>
              <div>
                {post.mainImage && (
  <Image
    src={urlFor(post.mainImage).width(720).url()}
    alt={post.title}
    width={720}
    height={400}
    style={{ borderRadius: 8 }}
  />
)}
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

