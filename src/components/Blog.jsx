import React from "react";
//* Images
//* Data
import posts from "../data/blog";

export default function Template() {
  console.log(posts);
  return (
    <div className="blog">
      <div className="posts">
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
      <div className="sidebar">
        <h3>Our Sidebar</h3>
        <p class="text-muted">
          You can put any information here you'd like.
          <ul class="list-group">
            <li class="list-group-item list-group-item-light">Latest Posts</li>
            <li class="list-group-item list-group-item-light">Announcements</li>
            <li class="list-group-item list-group-item-light">Calendars</li>
            <li class="list-group-item list-group-item-light">etc</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
