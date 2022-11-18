import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Personal = () => {
  const [eye, setEye] = useState(true);
  const [password, setPassword] = useState("");
  const [passCode, setPasCode] = useState();

  const showPassword = useRef("");

  useEffect(() => {
    const showPassword = async () =>
      setPasCode(await (await axios.get("jsons/password.json")).data);
    showPassword();
  }, []);
  const handlePassword = () => {
    if (eye) {
      showPassword.current.type = "text";
      setEye(false);
    } else {
      showPassword.current.type = "password";
      setEye(true);
    }
  };
  if (!passCode) return null;
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-blue-300 flex justify-center items-center">
      <div className="w-[500px] max-w-[90%] min-h-[300px] bg-blue-600 rounded-md flex justify-center items-center flex-col gap-5">
        <label className="text-2xl text-white">
          Shaxsiy Parolingizni kiriting
        </label>
        <div className="w-full relative flex justify-center items-center">
          <input
            type="password"
            className="rounded-md bg-white w-[90%] py-2 pl-4 pr-2 outline-none"
            ref={showPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="eye absolute text-2xl right-10 cursor-pointer text-blue-600"
            onClick={handlePassword}
          >
            {eye ? <AiFillEyeInvisible /> : !eye ? <AiFillEye /> : null}
          </div>
        </div>
        <NavLink
          to={passCode[0].password === password && "/personal/user"}
          className={
            "bg-white py-2 px-4 text-blue-600 rounded-md personal-password"
          }
        >
          Tasdiqlash
        </NavLink>

        <Link to={"/personal/new-password"} className="text-white text-2xl">
          Yangi Parol Qo'yishni hohlaysizmi.
        </Link>
      </div>
    </div>
  );
};

export default Personal;
