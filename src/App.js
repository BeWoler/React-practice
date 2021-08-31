import { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [post, setPost] = useState({ title: "", body: "" });
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 5", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };
  return (
    <div className="App">
      <div className="component__box">
        <h2>Functional component</h2>
        <Counter />
      </div>
      <div className="component__box">
        <h2>Class component</h2>
        <ClassCounter />
      </div>

      <form>
        <MyInput
          value={post.title}
          type="text"
          placeholder="Post title"
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
        <MyInput
          value={post.body}
          type="text"
          placeholder="Post body"
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
