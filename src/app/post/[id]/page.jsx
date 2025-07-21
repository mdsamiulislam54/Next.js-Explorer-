import { postDataFetchWithId } from '@/lib/postDataFeatch';
import React from 'react'

const postDetails = async ({params}) => {
    const { id } = params;
    const post = await postDataFetchWithId(id);
    console.log(post);
    // Here you would typically fetch the post details using the id
  return (
    <div>
        <h1>Post Details for Post {id}</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
 
    </div>
  )
}

export default postDetails