import React from "react";

const HomeAdmin = ({ data }) => {
  return (
    <div>
      <form className="flex justify-center gap-8 pb-8">
        <input className=" border-2 p-2 rounded-md" type="text" />
        <input className=" border-2 p-2 rounded-md" type="text" />
        <input className=" border-2 p-2 rounded-md" type="text" />
        <button className=" bg-blue-600 w-20 text-white rounded-md">
          Save
        </button>
      </form>
      <table className=" w-full text-center">
        <thead>
          <tr>
            <th className="border-2 border-gray-400 py-1">Name</th>
            <th className="border-2 border-gray-400 py-1">Last name</th>
            <th className="border-2 border-gray-400 py-1">position</th>
            <th className="border-2 border-gray-400 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td className="border-2 border-gray-400 py-2">{data.name}</td>
              <td className="border-2 border-gray-400 py-2">{data.lastname}</td>
              <td className="border-2 border-gray-400 py-2">{data.position}</td>
              <td className="border-2 border-gray-400 py-2">
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeAdmin;
