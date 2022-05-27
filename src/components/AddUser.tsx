import { useUser } from "../context/UserContext";
import { useState } from "react";
import { getUsers } from "../API/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddUser() {
  const { users, setUsers } = useUser();
  const [tempUser, setTempUser] = useState<any>();
  const [btn, setBtn] = useState<boolean>(true);

  function generateNew() {
    getUsers()
      .then((res) => res.json())
      .then((res) => {
        if (
          users.filter(
            (user) => user.picture.large === res.results[0].picture.large
          ).length > 0
        ) {
          setBtn(true);
          notify();
        } else {
          setBtn(false);
          setTempUser(res.results[0]);
        }
      });
  }

  function cancelBtn() {
    setTempUser(null);
  }

  function notify() {
    toast("Already exist");
  }

  function addToList() {
    if (users.includes(tempUser)) {
      setBtn(true);
      notify();
    } else {
      setBtn(true);
      setUsers([...users, tempUser]);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  const mainStyle = {
    marginTop: "30vh",
  };

  return (
    <div>
      {tempUser ? (
        <div style={mainStyle}>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img src={tempUser.picture.large} alt="" />
            </div>
            <div>
              <p>
                Name:
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
              disabled={btn}
            >
              Add User To List
            </button>
            <button className="btn btn-warning mx-2" onClick={generateNew}>
              Generate New
            </button>
            <button className="btn btn-warning mx-2" onClick={cancelBtn}>
              Cancel
            </button>
            <ToastContainer />
          </div>
        </div>
      ) : (
        <button
          onClick={generateNew}
          className="btn btn-danger"
          style={mainStyle}
        >
          Generate Random Users
        </button>
      )}
    </div>
  );
}
