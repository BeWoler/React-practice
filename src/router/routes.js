import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import CounterPage from "../pages/CounterPage";

export const routes = [
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  { path: "/counter", component: CounterPage, exact: true },
];
