import { useEffect, useState } from "react";
import { getUsers } from "../API/services";
import { User } from "../types/type";

export default function AddUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [tempUser, setTempUser] = useState<any>();

  function generateNew() {
    getUsers()
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results[0]);
        const toDo = res.results[0] as User;
        setTempUser(toDo);
      });
  }
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  function reLoad() {
    window.location.reload();
  }

  function addToList() {
    console.log(tempUser);
    // users.push(tempUser);

    setUsers([...users, tempUser]);
    localStorage.setItem("users", JSON.stringify(users));
  }

  const style = {
    marginTop: "30vh",
  };

  return (
    <div>
      {tempUser ? (
        <div style={style}>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img src={tempUser.picture.large} alt="" />
            </div>
            <div>
              <p>
                Name:{" "}
                <span>
                  {tempUser.name.title} {tempUser.name.first}{" "}
                  {tempUser.name.last}
                </span>
              </p>
              <p>Age: {tempUser.dob.age}</p>
              <p>Gender: {tempUser.gender}</p>
              <p>Email: {tempUser.email}</p>
              <p>Phone: {tempUser.phone}</p>
              <p>Birthday: {tempUser.dob.date}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-warning mx-2" onClick={addToList}>
              Add User To List
            </button>
            <button className="btn btn-warning mx-2" onClick={generateNew}>
              Generate New
            </button>
            <button className="btn btn-warning mx-2" onClick={reLoad}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button onClick={generateNew} className="btn btn-danger" style={style}>
          Generate Random Users
        </button>
      )}
    </div>
  );
}
