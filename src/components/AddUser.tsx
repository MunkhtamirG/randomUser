import { useEffect, useState } from "react";
import { getUsers } from "../API/services";
import { User } from "../types/type";

export default function AddUser() {
  const [users, setUsers] = useState<User[]>([]);

  function generateNew() {
    getUsers()
      .then((res) => res.json())
      .then((res) => {
        setUsers([...users, res.results[0]]);
      });
  }
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  function reLoad() {
    window.location.reload();
  }

  function addToList() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  const style = {
    marginTop: "30vh",
  };

  return (
    <div>
      {users[0] ? (
        <div style={style}>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img src={users[users.length - 1].picture.large} alt="" />
            </div>
            <div>
              <p>
                Name:{" "}
                <span>
                  {users[users.length - 1].name.title} {users[0].name.first}{" "}
                  {users[users.length - 1].name.last}
                </span>
              </p>
              <p>Age: {users[users.length - 1].dob.age}</p>
              <p>Gender: {users[users.length - 1].gender}</p>
              <p>Email: {users[users.length - 1].email}</p>
              <p>Phone: {users[users.length - 1].phone}</p>
              <p>Birthday: {users[users.length - 1].dob.date}</p>
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
