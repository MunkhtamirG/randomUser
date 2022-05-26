import React from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const style = {
    inner: {
      width: "50vw",
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 20px 20px 20px",
    },
    outer: { backgroundColor: "black" },
  };
  return (
    <div style={style.outer}>
      <div style={style.inner}>
        <Link to={"/"} className="btn btn-warning">
          Home
        </Link>
        <Link to={"/users"} className="btn btn-warning">
          Users
        </Link>
        <Link to={"/adduser"} className="btn btn-warning">
          Add User
        </Link>
        <Link to={"/notfound"} className="btn btn-warning">
          Not Found
        </Link>
      </div>
    </div>
  );
}
