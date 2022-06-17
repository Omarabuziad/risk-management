import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./style.css";

const navPages = [{ name : "معلومات",
path : "information"}, {name :"حساب المخاطر" , path : "calculation"}, {name : "الصفحة الرئيسية" , path : "home"}];

function Header() {
  const navLinkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid black" : "none",
      textDecoration: "none",
    };
  };
  return (
    <header className="mainHeader">
      <nav>
        <ul className="category">
        {navPages.map((elem, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={elem.path}
                      style={navLinkStyle}
                    >
                      {elem.name}
                    </NavLink>
                  </li>
        );})}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
