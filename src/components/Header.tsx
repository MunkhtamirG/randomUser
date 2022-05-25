import React from "react";

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
        <button className="btn btn-warning">Home</button>
        <button className="btn btn-warning">Users</button>
        <button className="btn btn-warning">Add User</button>
        <button className="btn btn-warning">Not Found</button>
      </div>
    </div>
  );
}
