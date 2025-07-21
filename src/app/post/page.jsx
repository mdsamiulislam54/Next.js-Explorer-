import { postDataFetch } from '@/lib/postDataFeatch'
import Link from 'next/link';
import React from 'react'

const  Post =  async () => {
    const data = await postDataFetch();

  return (
    <div>
        <h1>Posts</h1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.map((post) => (
                <Link href={`post/${post.id}`}>
                <li key={post.id} className="mb-4 p-4 border rounded">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
                </Link>
            ))}
        </ul>
        <p>Total Posts: {data.length}</p>
    </div>
  )
}

export default Post