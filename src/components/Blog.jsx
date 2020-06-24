import React from "react";
//* Images
//* Data
import posts from "../data/blog";

export default function Template() {
  console.log(posts);
  return (
    <div className="blog">
      {posts.map((post) => {
        return (
          <div className="post">
            <div className="image">
              <img src={post.imageUrl} alt="post url" />
            </div>
            <div className="content">
              <span>
                {post.category} / {post.author} / {post.date}
              </span>
              <h3>{post.title}</h3>
              <p>{post.snippet}</p>
              <button>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
