import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Brand from "../UI/Brand";

const navLinks = [
  {
    id:1,
    path:"/",
    title:"Home"
  },
  {
    id:2,
    path:"/about",
    title:"About"
  },
  {
    id:3,
    path:"/models",
    title:"Models"
  },
  {
    id:4,
    path:"/testimonials",
    title:"Testimonials"
  },
  {
    id:5,
    path:"/contact",
    title:"Contact"
  },
]
function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
              <Link onClick={openNav} to={link.path}>
                {link.title}
              </Link>
            </li>
              )
            })}
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <Brand/>
          <ul className="navbar__links">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
              <Link to={link.path} className="home-link">
                {link.title}
              </Link>
            </li>
              )
            })}
          </ul>
          <div className="navbar__buttons">

            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
