import React, { useState } from "react";
import Nav from "./Nav";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";

const Home = () => {
  const [btn, setBtn] = useState("");

  //   function btnUser() {
  //     btn === "User" ? setBtn("") : setBtn("User");
  //   }

  //   function btnAdmin() {
  //     btn === "Admin" ? setBtn("") : setBtn("Admin");
  //   }

  return (
    <div>
      <Nav />
      <div className="flex pt-14 flex-col items-center">
        <div className="text-5xl font-bold pb-6 pt-10 text-center">
          <h1>Generation Thailand</h1>
          <h1 className="tracking-wide ">React - Assessment</h1>
        </div>
        <div className="flex justify-between w-2/5 py-4">
          <button
            onClick={() => {
              btn === "User" ? setBtn("") : setBtn("User");
            }}
            className=" rounded-md shadow-lg bg-slate-400 p-4 w-56"
          >
            User Home Sector
          </button>
          <button
            onClick={() => {
              btn === "Admin" ? setBtn("") : setBtn("Admin");
            }}
            className=" rounded-md shadow-lg bg-slate-400 p-4 w-56"
          >
            Admin Home Sector
          </button>
        </div>
        <div className="pt-4">
          {btn === "Admin" ? <HomeAdmin /> : null}
          {btn === "User" ? <HomeUser /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
