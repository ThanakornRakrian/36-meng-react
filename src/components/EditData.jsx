import React from "react";

const EditData = () => {
  return (
    <tr>
      <td className="border-2 border-gray-400 py-2">{data.name}</td>
      <td className="border-2 border-gray-400 py-2">{data.lastname}</td>
      <td className="border-2 border-gray-400 py-2">{data.position}</td>
      <td className="border-2 border-gray-400 py-2 w-56">
        <button className=" bg-white border-gray-400 border mr-2 w-20 rounded-md ">
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditData;
