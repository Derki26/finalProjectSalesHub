import { Link } from "react-router-dom";
// import "../CSS/header.css";

const menuLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Courses",
    to: "/courses",
  },
  {
    label: "Certificate",
    to: "/certificate",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img
            src="img/myLogo.png"
            alt="logo"
            className="object-cover w-full h-20"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn btn-outline text-white"
          style={{
            fontSize: "1.5rem",
            borderRadius: "20px",
            background: "#00c3ff",
          }}
        >
          Log in
        </Link>
      </div>
    </div>
  );
};
