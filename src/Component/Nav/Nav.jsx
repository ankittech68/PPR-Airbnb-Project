import React, { useState, useContext } from 'react'
import "./Nav.css"
import logo from "../../assets/p.jpg"

import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LuTentTree } from "react-icons/lu";
import { FaTreeCity } from "react-icons/fa6";

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { dataContext } from "../../Context/Usercontext";   // ✅ Added

function Nav() {

  let [visible, setvisible] = useState(false)

  let { isLogin, logoutUser } = useContext(dataContext);   // ✅ Added
  let navigate = useNavigate();                            // ✅ Added

  return (
    <div id='Nav'>

      {/* ✅ Hamburger Menu */}
      {visible ? (
        <div className="hamburger">

          {/* ✅ Login/Signup only if not logged */}
          {!isLogin && (
            <>
              <Link to={"/login"} onClick={() => setvisible(false)}>
                <div className="ham1">Login</div>
              </Link>

              <Link to={"/signup"} onClick={() => setvisible(false)}>
                <div className="ham1">Sign up</div>
              </Link>
            </>
          )}

          {/* ✅ Logout only if logged */}
          {isLogin && (
            <div
              className="ham1"
              onClick={() => {
                setvisible(false);
                logoutUser();
                alert("Logout Successfully ✅");
                navigate("/");
              }}
            >
              Logout
            </div>
          )}

          {/* ✅ Protected Listing */}
          <div
            className="ham1"
            onClick={() => {
              setvisible(false);

              if (isLogin) navigate("/listing");
              else navigate("/login");
            }}
          >
            List your home
          </div>

          {/* ✅ Help Center */}
          <Link to={"/contact"} onClick={() => setvisible(false)}>
            <div className="ham1">Help center</div>
          </Link>

        </div>
      ) : (
        <div></div>
      )}

      {/* ✅ Navbar Top */}
      <div className="nav1">

        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="" width="50px" />
            <h1>Private Property Rental</h1>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder='Search Destination' />
          <button><span>Search</span> <IoSearch /></button>
        </div>

        <div className="ham">

          {/* ✅ Protected Button */}
          <button
            id='btn1'
            onClick={() => {
              if (isLogin) navigate("/listing");
              else navigate("/login");
            }}
          >
            List Your Home
          </button>

          <button id="btn2" onClick={() => {
            setvisible(prev => !prev)
          }}>
            <GiHamburgerMenu id='svg1' />
            <CgProfile id='svg2' />
          </button>

        </div>

      </div>

      {/* ✅ Categories (Same as your code) */}
      <div className="nav2">

        <NavLink to={""}>
          <div className="svg11">
            <MdOutlineWhatshot /><h3>Trending</h3>
          </div>
        </NavLink>

        <NavLink to={"/houses"}>
          <div className="svg11">
            <GiFamilyHouse /><h3>Houses</h3>
          </div>
        </NavLink>

        <div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div>
        <div className="svg11"><PiFarm /><h3>Farm Houses</h3></div>
        <div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div>
        <div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div>
        <div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div>
        <div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div>
        <div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div>

      </div>

    </div>
  )
}

export default Nav
