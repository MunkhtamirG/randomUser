import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Main(): JSX.Element {
  const { users, setUsers } = useUser();
  const icons = [
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

  return (
    <div style={style.outer}>
      <img
        src={users[Math.floor(Math.random() * users.length)]?.picture.large}
        alt=""
        style={style.picture}
      />
      <hr style={style.hr} />

      <p>
        Hi, My name is
        <span style={style.name}>
          {users[Math.floor(Math.random() * users.length)]?.name.title}{" "}
          {users[Math.floor(Math.random() * users.length)]?.name.first}{" "}
          {users[0]?.name.last}
        </span>
      </p>
      <div>
        <Button className="mx-2">
          <img src={icons[0]} alt="" />
        </Button>
        <Button className="mx-2">
          <img src={icons[1]} alt="" />
        </Button>
        <Button className="mx-2">
          <img src={icons[2]} alt="" />
        </Button>
        <Button className="mx-2">
          <img src={icons[3]} alt="" />
        </Button>
        <Button className="mx-2">
          <img src={icons[4]} alt="" />
        </Button>
        <Button className="mx-2">
          <img src={icons[5]} alt="" />
        </Button>
      </div>
    </div>
  );
}
