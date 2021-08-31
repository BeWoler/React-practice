import { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 5", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "React", body: "Description React" },
    { id: 2, title: "React 2", body: "Description React" },
    { id: 3, title: "React 5", body: "Description React" },
    { id: 4, title: "React 4", body: "Description React" },
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
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />
    </div>
  );
}

export default App;
