import React, { useState, useEffect, useContext } from "react";
import { Input, NavbarItem ,Navbar} from "keep-react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <Input placeholder="search" type="search" />
      <NavBar>
        <NavbarItem>Recomended</NavbarItem>
        <NavLink>Popular</NavLink>
      </NavBar>
    </div>
  );
}
