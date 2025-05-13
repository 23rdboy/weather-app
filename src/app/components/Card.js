"use client";
import { useState } from "react";

const Card = ({ date, condition, minTemp, maxTemp, wind }) => {
  //condition will be img or ☂︎☁︎☼
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 w-full max-w-lg">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center m-3 w-100">
          <h2 className="text-2xl font-bold text-blue-900">{date}</h2>
          <p className="text-7xl">{condition}</p>
          <p className="font-bold">{minTemp}</p>
          <p className="font-bold">{maxTemp}</p>
          <p className="font-bold">{wind}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
