import React, { useContext } from "react";
import "./Login.css";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Context/Usercontext";

function Login() {

  // ✅ Context se login function
  const { loginUser } = useContext(dataContext);

  // ✅ Redirect navigation
  const navigate = useNavigate();

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(); // ✅ User logged in

    alert("Login Successfully...👍");

    navigate("/listing"); // ✅ Redirect after login
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>

        <span id="logintitle">Login Page</span>

        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>

        <div className="list">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required />
        </div>

        <button type="submit" id="loginbtn">
          Login <MdLogin />
        </button>

      </form>
    </div>
  );
}

export default Login;
