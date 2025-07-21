import React from 'react'

const page = ({params}) => {
    const { id } = params;
  return (
    <div>
        <h1>Blog Post {id}</h1>
        <p>This is the content for blog post {id}.</p>
        <p>More details about blog post {id} will go here.</p>
    </div>
  )
}

export default page