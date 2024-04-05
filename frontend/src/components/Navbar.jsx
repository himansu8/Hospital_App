import React, { useState } from 'react'
import { Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Pop from './Pop';



function Navbar() {
  const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false);
  return (
    <>
    <nav className={"container"}>
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)}>
            Appointment
          </Link>
          <Link to={"/about"} onClick={() => setShow(!show)}>
            About Us
          </Link>
        </div>
        {/* {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>
            LOGIN
          </button>
        )} */}
         <button className="loginBtn btn" onClick={() => setOpen(true)} style={{cursor:"pointer" }}>
            LOGIN
          </button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
    {open && <Pop setOpen={setOpen} />}
  </>
  )
}

export default Navbar