import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UserContext, { useUser } from "../context/UserContext";

export default function Main(): JSX.Element {
  function clickHandler() {}
  const icon = [
    "icons/user.png",
    "icons/mail.png",
    "icons/calender.png",
    "icons/map.png",
    "icons/phone.png",
    "icons/password.png",
  ];
  const style = {
    name: {
      display: "block",
      fontSize: "25px",
      fontWeight: "700",
    },
    picture: {
      borderRadius: "50%",
      width: "300px",
      border: "1px solid white",
      // padding: "10px",
    },
    outer: {
      marginTop: "20vh",
    },
    hr: {
      width: "100%",
      height: "3px",
      position: "absolute" as "absolute",
      top: "40vh",
      zIndex: "-1",
      color: "white",
    },
  };
  const { users, setUsers } = useUser();
  console.log(users[0]);

  return (
    <div style={style.outer}>
      <img src={users[0]?.picture.large} alt="" style={style.picture} />
      <hr style={style.hr} />

      <p>
        Hi, My name is
        <span style={style.name}>
          {users[0]?.name.title} {users[0]?.name.first} {users[0]?.name.last}
        </span>
      </p>
      <div>
        {icon.map((e: string, i) => {
          return (
            <Button key={i} className="mx-2 btn-primary" onClick={clickHandler}>
              <img src={e} alt="" />
            </Button>
          );
        })}
      </div>
    </div>
  );
}
