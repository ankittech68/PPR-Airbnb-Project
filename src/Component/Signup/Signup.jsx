import React, { useContext } from "react";
import "./Signup.css";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Context/Usercontext";

function Signup() {

  // ✅ Context se login function
  const { loginUser } = useContext(dataContext);

  // ✅ Redirect navigation
  const navigate = useNavigate();

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Password matching check
    const pass = document.getElementById("pass1").value;
    const conPass = document.getElementById("conpass1").value;

    if (pass !== conPass) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("SignUp Successfully...👍");

    // ✅ Auto Login after Signup
    loginUser();

    // ✅ Redirect to Listing page
    navigate("/listing");
  };

  return (
    <div id="signup">
      <form onSubmit={handleSubmit}>

        <span id="signuptitle">Sign Up Page</span>

        <div className="list">
          <label htmlFor="name">UserName</label>
          <input type="text" id="name" required />
        </div>

        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>

        <div className="list">
          <label htmlFor="pass1">Password</label>
          <input type="password" id="pass1" required />
        </div>

        <div className="list">
          <label htmlFor="conpass1">Confirm Password</label>
          <input type="password" id="conpass1" required />
        </div>

        <button type="submit" id="signupbtn">
          SignUp <MdOutlinePersonAddAlt1 />
        </button>

      </form>
    </div>
  );
}

export default Signup;
