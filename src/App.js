import { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 5", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);
  return (
    <div className="App">
      {/* <div className="component__box">
        <h2>Functional component</h2>
        <Counter />
      </div>
      <div className="component__box">
        <h2>Class component</h2>
        <ClassCounter />
      </div> */}
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default App;
