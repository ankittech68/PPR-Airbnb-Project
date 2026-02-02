import React, { createContext, useState } from "react";

export let dataContext = createContext();

function Usercontext({ children }) {

  // ✅ Listing Data (already yours)
  let [title, setTitle] = useState("");
  let [addListing, setaddListing] = useState(false);
  let [addImage1, setaddImage1] = useState(null);
  let [addImage2, setaddImage2] = useState(null);
  let [addImage3, setaddImage3] = useState(null);
  let [price, setprice] = useState(null);

  // ✅ NEW: Login State
  let [isLogin, setIsLogin] = useState(false);

  // ✅ Login Function
  const loginUser = () => {
    setIsLogin(true);
  };

  // ✅ Logout Function
  const logoutUser = () => {
    setIsLogin(false);
  };

  let value = {
    // Listing Values
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice,

    // ✅ Auth Values
    isLogin,
    loginUser,
    logoutUser,
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default Usercontext;
