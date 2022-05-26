import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
