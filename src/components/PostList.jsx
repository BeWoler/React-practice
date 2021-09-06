import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
