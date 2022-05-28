import React from "react";
import { NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const style = {
    inner: {
      width: "50vw",
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 20px 20px 20px",
    },
    outer: {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    brand: { color: "#1de9b6", fontWeight: "900", fontSize: "1.5rem" },
    buttons: {
      color: "rgba(255, 255, 255)",
      fontWeight: "600",
      fontSize: "20px",
      textDecoration: "none",
    },
  };
  return (
    <div style={style.outer} className="container">
      <NavbarBrand style={style.brand}>RANDOM USER</NavbarBrand>
      <div style={style.inner}>
        <Link to={"/"} style={style.buttons}>
          Home
        </Link>
        <Link to={"/users"} style={style.buttons}>
          Users
        </Link>
        <Link to={"/adduser"} style={style.buttons}>
          Add User
        </Link>
        <Link to={"/notfound"} style={style.buttons}>
          Not Found
        </Link>
      </div>
    </div>
  );
}
