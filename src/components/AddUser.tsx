import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";
import { getUsers } from "../API/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddUser() {
  const { users, setUsers } = useUser();
  const [tempUser, setTempUser] = useState<any>();

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  function generateNew() {
    getUsers()
      .then((res) => res.json())
      .then((res) => {
        setTempUser(res.results[0]);
      });
  }

  function reLoad() {
    window.location.reload();
  }

  function notify() {
    toast("Already exist");
  }

  function addToList(event: any) {
    setUsers([...users, tempUser]);
    users.map((e) => {
      if (e.picture.large === tempUser.picture.large) {
        setUsers(users);
        notify();
        event.target.disabled = true;
      }
    });
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
            <button
              className="btn btn-warning mx-2"
              onClick={addToList}
              name="buttonForAdd"
            >
              Add User To List
            </button>
            <button className="btn btn-warning mx-2" onClick={generateNew}>
              Generate New
            </button>
            <button className="btn btn-warning mx-2" onClick={reLoad}>
              Cancel
            </button>
            <ToastContainer />
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
