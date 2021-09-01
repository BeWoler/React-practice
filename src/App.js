import { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 5", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare()))
  }

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

      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка по"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Список постов 1" />
      ) : (
        <div style={{marginTop: '50px', textAlign: 'center', fontSize: '30px'}}>Posts not found</div>
      )}
    </div>
  );
}

export default App;
