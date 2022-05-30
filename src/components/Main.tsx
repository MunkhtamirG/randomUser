import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getDataFromUsers } from "../API/services";
import { useUser } from "../context/UserContext";

export default function Main(): JSX.Element {
  const { users, setUsers } = useUser();
  const [randomUser, setRandomUser] = useState<any>();
  const [intro, setIntro] = useState<any>();
  const [mainText, setMainText] = useState<any>();
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
      color: "white",
    },
    picture: {
      borderRadius: "50%",
      width: "200px",
      border: "1px solid transparent",
      marginBottom: "40px",
      backgroundColor: "#1de9b6",
      borderColor: "#1de9b6",
      boxShadow: " 0 10px 16px rgb(29 233 182 / 30%)",
      padding: "5px",
    },
    outer: {
      marginTop: "20vh",
    },
    hr: {
      width: "100%",
      height: "3px",
      position: "absolute" as "absolute",
      top: "36vh",
      left: "0",
      zIndex: "-1",
      backgroundColor: "#1de9b6",
      boxShadow: " 0 10px 16px rgb(29 233 182 / 70%)",
    },
  };

  useEffect(() => {
    setRandomUser(users[Math.floor(Math.random() * users.length)]);
  }, [users]);

  useEffect(() => {
    getDataFromUsers()
      .then((e) => e.json())
      .then((e) => {
        setIntro(e.name);
      });
  }, []);

  useEffect(() => {
    setMainText(
      randomUser?.name.title +
        " " +
        randomUser?.name.first +
        " " +
        randomUser?.name.last
    );
  }, [randomUser]);

  function clickhandler(e: any) {
    if (e.target.alt === "name") {
      getDataFromUsers()
        .then((e) => e.json())
        .then((e) => {
          setIntro(e.name);
          setMainText(
            randomUser.name.title +
              " " +
              randomUser.name.first +
              " " +
              randomUser.name.last
          );
        });
    } else if (e.target.alt === "mail") {
      getDataFromUsers()
        .then((e) => e.json())
        .then((e) => {
          setIntro(e.mail);
          setMainText(randomUser.email);
        });
    } else if (e.target.alt === "calender") {
      getDataFromUsers()
        .then((e) => e.json())
        .then((e) => {
          setIntro(e.calender);
          setMainText(randomUser.dob.date);
        });
    } else if (e.target.alt === "map") {
      getDataFromUsers()
        .then((e) => e.json())
        .then((e) => {
          setIntro(e.map);
          setMainText(
            randomUser.location.country + " " + randomUser.location.city
          );
        });
    } else if (e.target.alt === "phone") {
      getDataFromUsers()
        .then((e) => e.json())
        .then((e) => {
          setIntro(e.phone);
          setMainText(randomUser.phone);
        });
    } else if (e.target.alt === "password") {
      getDataFromUsers()
        .then((e) => e.json())
        .then((e) => {
          setIntro(e.password);

          setMainText(randomUser.login.password);
        });
    }
  }

  return (
    <div style={style.outer}>
      <img src={randomUser?.picture.large} alt="" style={style.picture} />

      <span style={style.hr}></span>

      <p className="text-light">
        {intro && intro}
        <span style={style.name}>{mainText && mainText}</span>
      </p>
      <div>
        <Button className="mx-2" name="name" onMouseOver={clickhandler}>
          <img src={icons[0]} alt="name" />
        </Button>
        <Button className="mx-2" onMouseOver={clickhandler}>
          <img src={icons[1]} alt="mail" />
        </Button>
        <Button className="mx-2" onMouseOver={clickhandler}>
          <img src={icons[2]} alt="calender" />
        </Button>
        <Button className="mx-2" onMouseOver={clickhandler}>
          <img src={icons[3]} alt="map" />
        </Button>
        <Button className="mx-2" onMouseOver={clickhandler}>
          <img src={icons[4]} alt="phone" />
        </Button>
        <Button className="mx-2" onMouseOver={clickhandler}>
          <img src={icons[5]} alt="password" />
        </Button>
      </div>
    </div>
  );
}
