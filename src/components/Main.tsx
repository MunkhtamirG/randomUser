import { Button } from "react-bootstrap";
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

  function clickHandler() {}

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
          {users[0]?.name.title} {users[0]?.name.first} {users[0]?.name.last}
        </span>
      </p>
      <div>
        <Button>
          <img src={icons[0]} alt="" onClick={clickHandler} />
        </Button>
        <Button>
          <img src={icons[1]} alt="" />
        </Button>
        <Button>
          <img src={icons[2]} alt="" />
        </Button>
        <Button>
          <img src={icons[3]} alt="" />
        </Button>
        <Button>
          <img src={icons[4]} alt="" />
        </Button>
        <Button>
          <img src={icons[5]} alt="" />
        </Button>
      </div>
    </div>
  );
}
