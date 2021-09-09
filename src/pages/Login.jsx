import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
  return (
    <div>
      <h1>Page for login</h1>
      <form>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
