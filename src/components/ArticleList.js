import React from 'react'
import Article from './Article'

function Articlelist({posts}) {
    return (
        <main>
            {posts.map((post)=> (
                <Article 
                key = {post.id} 
                title = {post.title} 
                preview = {post.preview}
                date= {post.date}
                id = {post.id}
                />
            ))}
        </main>
    )
}

export default Articlelist