import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
const Enter = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const showUser = async () =>
      setUser(await (await axios.get("./jsons/tableList.json")).data);
    showUser();
  }, []);
  if (!user) return null;
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="w-[400px] min-h-[500px] bg-blue-600 flex justify-center items-center flex-col gap-4 rounded-md relative">
        <div className="exit text-3xl duration-300 bg-green-500 hover:bg-green-600 rounded-full p-1 text-white absolute top-2 right-2 cursor-pointer">
          <NavLink to={"/"}>
            <HiXMark />
          </NavLink>
        </div>
        <div className="user-name w-[90%] flex flex-col gap-2">
          <label className="text-xl text-white">Kimga</label>
          <input
            type="text"
            list="data-name"
            className="w-full py-2 rounded-md pl-2 outline-none"
          />
          <datalist id="data-name">
            {user.map((user) => (
              <option key={user.id} value={user.userName}></option>
            ))}
          </datalist>
        </div>
        <div className="valyuta w-[90%] flex flex-col gap-2">
          <label className="text-xl text-white">Valyuta</label>
          <input
            type="text"
            list="data-valyuta"
            className="w-full py-2 rounded-md pl-2 outline-none"
          />
          <datalist id="data-valyuta">
            <option value="USD"></option>
            <option value="UZS"></option>
            <option value="RUBL"></option>
          </datalist>
        </div>
        <div className="summa w-[90%] flex flex-col gap-2">
          <label className="text-xl text-white">Summa</label>
          <input
            type="text"
            className="w-full py-2 rounded-md pl-2 outline-none"
          />
        </div>
        <div className="comment w-[90%] flex flex-col gap-2">
          <label className="text-xl text-white">Qo'shimcha ma'lumot</label>
          <textarea className="w-90% min-h-80px p-2 outline-none resize-none rounded-md"></textarea>
        </div>
        <NavLink
          to={"/"}
          className="bg-green-500 py-2 px-4 rounded-md text-white hover:bg-green-600"
        >
          Qo'shish
        </NavLink>
      </div>
    </div>
  );
};

export default Enter;
