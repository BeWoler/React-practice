import { useEffect, useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import { getPageCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      <MyButton onClick={() => setModal(true)} style={{ maxWidth: "200px" }}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>
          Error ${postError}
        </h1>
      )}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов 1"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
