import React, { useEffect, useState } from "react";

import { useUser } from "../context/UserContext";
export default function Users(): JSX.Element {
  const { users, setUsers } = useUser();
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  return (
    <div className="p-4">
      <h2>Male</h2>
      {users &&
        users
          .filter((user) => user.gender === "male")
          .map((e, i) => {
            return <img src={e.picture.large} alt="" key={i} className="p-4" />;
          })}
      <h2>Female</h2>
      {users &&
        users
          .filter((user) => user.gender === "female")
          .map((e, i) => {
            return <img src={e.picture.large} alt="" key={i} className="p-4" />;
          })}
    </div>
  );
}
