import React from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navibar from "./Navibar";

export default function Layout() {
  return (
    <>
      <Navibar />

      <Outlet />
    </>
  );
}
