import React, { useState } from "react";
import Nav from "./Nav";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";

const Home = () => {
  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    },
  ];
  const [data, setData] = useState(mockEmployees);
  const [btn, setBtn] = useState("");

  console.log(data);

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((value, i) => i !== index));
  };

  console.log(setData);

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
          {btn === "Admin" ? (
            <HomeAdmin
              data={data}
              setData={setData}
              handleDelete={handleDelete}
            />
          ) : null}
          {btn === "User" ? <HomeUser data={data} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
