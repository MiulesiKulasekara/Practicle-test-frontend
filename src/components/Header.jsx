import React from "react";
import logo from "../assets/logo/MediQletter.png";

const Header = () => {
  return (
    <header className="w-full px-10 py-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="object-contain"  style={{height:"70px"}}/>
      </div>
      <nav className="flex gap-20">
        <a
          href="#"
          style={{ color: "#ffffff" }}
          className="hover:text-blue-500 font-bold"
        >
          Home
        </a>
        <a
          href="#"
          style={{ color: "#ffffff" }}
          className="hover:text-blue-500 font-bold"
        >
          About
        </a>
        <a
          href="#"
          style={{ color: "#ffffff" }}
          className="hover:text-blue-500 font-bold"
        >
          Services
        </a>
        <a
          href="#"
          style={{ color: "#ffffff" }}
          className="hover:text-blue-500 font-bold"
        >
          Contact us
        </a>
        <a
          href="#"
          style={{ color: "#ffffff" }}
          className="hover:text-blue-500 font-bold"
        >
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
