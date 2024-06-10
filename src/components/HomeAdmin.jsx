import React from "react";
import FormInput from "./FormInput";

const HomeAdmin = ({ data, setData, handleDelete, handleDeleteAll }) => {
  return (
    <div>
      <FormInput setData={setData} />
      <table className=" w-full text-center">
        <thead>
          {data.length !== 0 ? (
            <tr>
              <th className="border-2 border-gray-400 py-1">Name</th>
              <th className="border-2 border-gray-400 py-1">Last name</th>
              <th className="border-2 border-gray-400 py-1">position</th>
              <th className="border-2 border-gray-400 py-1">Action</th>
            </tr>
          ) : null}
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td className="border-2 border-gray-400 py-2">{data.name}</td>
              <td className="border-2 border-gray-400 py-2">{data.lastname}</td>
              <td className="border-2 border-gray-400 py-2">{data.position}</td>
              <td className="border-2 border-gray-400 py-2 w-56">
                <button className=" bg-white border-gray-400 border mr-2 w-20 rounded-md ">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className=" bg-yellow-500 border border-yellow-600 ml-2 w-20 rounded-md text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 ? null : (
        <button
          onClick={() => handleDeleteAll()}
          className=" bg-red-500 border border-red-600 w-full rounded-md text-white mt-6"
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default HomeAdmin;
