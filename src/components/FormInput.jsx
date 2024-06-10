import React from "react";

const FormInput = ({ setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const lastname = e.target.lastname.value;
    const position = e.target.position.value;
    // console.log("e =", position);
    // console.log("e =", lastName);
    // console.log("e =", name);

    const newData = {
      id: Math.random(),
      name,
      lastname,
      position,
    };
    setData((prevData) => prevData.concat(newData));
    resetForm(e);
  };

  function resetForm(e) {
    e.target.name.value = "";
    e.target.lastname.value = "";
    e.target.position.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-8 pb-8">
      <input
        type="text"
        name="name"
        placeholder="First Name"
        className=" border-2 p-2 rounded-md"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        className=" border-2 p-2 rounded-md"
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        className=" border-2 p-2 rounded-md"
      />
      <button type="submit" className=" bg-blue-600 w-20 text-white rounded-md">
        Save
      </button>
    </form>
  );
};

export default FormInput;
