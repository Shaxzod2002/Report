import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
const Personal = () => {
  const [eye, setEye] = useState(false);
  const showPassword = useRef("");
  const handlePassword = () => {
      if (!eye) {
        showPassword.current.type = "text";
      } else if (eye) {
          showPassword.current.type = "password";
    }
  };
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-blue-300 flex justify-center items-center">
      <form className="w-[500px] min-h-[300px] bg-blue-600 rounded-md flex justify-center items-center flex-col gap-5">
        <label className="text-2xl text-white">
          Shaxsiy Parolingizni kiriting
        </label>
        <div className="w-full relative flex justify-center items-center">
          <input
            type="password"
            className="rounded-md bg-white w-[90%] py-2 pl-4 pr-2 outline-none"
            ref={showPassword}
          />
          <div
            className="eye absolute text-2xl right-10 cursor-pointer text-blue-600"
            onClick={handlePassword}
          >
            <AiFillEyeInvisible />
          </div>
        </div>
        <NavLink
          to={"/personal/user"}
          className={"bg-white py-2 px-4 text-blue-600 rounded-md"}
        >
          Tasdiqlash
        </NavLink>
      </form>
    </div>
  );
};

export default Personal;
