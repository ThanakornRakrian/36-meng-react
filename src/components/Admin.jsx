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
        <div className="w-56 h-56 bg-yellow-200 overflow-hidden" >
          <img src={Picture}/>
        </div>
        <h3 className="pt-6 pb-4 font-bold">Short Biography:</h3>
        <p className="text-center w-2/5">
          ผม นายธนกร รักเรียน ชื่อเล่น เม้ง ชอบสีโทนเย็นโดยเฉพาะม่วงกับน้ำเงิน ชอบสัตว์ทุกชนิดโดยเฉพาะงู กิจกรรมที่ชอบ เดินป่า ดำน้ำ บาสเกตบอล กิจกรรมadventure เล่นบอร์ดเกม ปัจจุบันกำลังเรียน coding อยู่ที่ Generation - junior software developer camp 
        </p>
      </div>
    </div>
  );
};

export default Admin;
