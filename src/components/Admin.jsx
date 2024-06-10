import React from "react";
import Nav from "./Nav";
import Picture from "../assets/broken_hand.jpg";

const Admin = () => {
  return (
    <div>
      <Nav />

      <div className="flex flex-col bg-slate-100 min-h-screen items-center pt-14">
        <h1 className="font-bold pt-6 pb-8 text-3xl">
          Thanakorn - Group G - 36
        </h1>
        <div className="w-64 h-56 bg-yellow-200">
          <img src={Picture} />
        </div>
        <h3 className="pt-6 pb-4 font-bold">Short Biography:</h3>
        <p className="text-center w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus corporis dignissimos obcaecati odit fuga saepe fugit
          ratione iure deleniti corrupti a, temporibus, optio eius nesciunt?
          Voluptatum neque, perspiciatis amet corrupti deserunt a? Ad tenetur
          illum repellendus et? Consequatur labore expedita error consequuntur
          voluptatum repellendus culpa, itaque saepe, dolorem beatae alias.
        </p>
      </div>
    </div>
  );
};

export default Admin;
