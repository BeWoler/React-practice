import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <div style={{ marginTop: "50px", textAlign: "center", fontSize: "30px" }}>
        Posts not found
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => {
        return (
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id}
          />
        );
      })}
    </div>
  );
}
