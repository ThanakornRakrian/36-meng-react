import React from "react";
import FormInput from "./FormInput";

const HomeAdmin = ({ data, setData, handleDelete}) => {
  return (
    <div>
      <FormInput setData={setData} />
      {/* <form className="flex justify-center gap-8 pb-8">
        <input className=" border-2 p-2 rounded-md" type="text" />
        <input className=" border-2 p-2 rounded-md" type="text" />
        <input className=" border-2 p-2 rounded-md" type="text" />
        <button className=" bg-blue-600 w-20 text-white rounded-md">
          Save
        </button>
      </form> */}
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
          {data.map((data, index) => (
            <tr key={index}>
              <td className="border-2 border-gray-400 py-2">{data.name}</td>
              <td className="border-2 border-gray-400 py-2">{data.lastname}</td>
              <td className="border-2 border-gray-400 py-2">{data.position}</td>
              <td className="border-2 border-gray-400 py-2 w-56">
                <button className=" bg-white border-gray-400 border mr-2 w-20 rounded-md ">
                  Edit
                </button>
                <button onClick={()=>handleDelete(index)} className=" bg-red-500 border border-red-600 ml-2 w-20 rounded-md text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeAdmin;
