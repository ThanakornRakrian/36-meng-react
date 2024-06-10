import React from "react";

const HomeUser = ({ data }) => {
  return (
    <div className="flex justify-center w-screen">
      <table className=" w-2/5 text-center">
        <thead>
          <tr>
            <th className="border-2 border-gray-400 py-1">Name</th>
            <th className="border-2 border-gray-400 py-1">Last name</th>
            <th className="border-2 border-gray-400 py-1">position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={index}>
              <td className="border-2 border-gray-400 py-2">{data.name}</td>
              <td className="border-2 border-gray-400 py-2">{data.lastname}</td>
              <td className="border-2 border-gray-400 py-2">{data.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeUser;
