import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import { HiOutlineBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Enter from "./components/pages/Enter";
import Exit from "./components/pages/Exit";
import Usd from "./components/pages/Usd";
import Uzs from "./components/pages/Uzs";
import Rubl from "./components/pages/Rubl";
import User from "./components/pages/User";
import Personal from "./components/pages/Personal";
function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCurrency, setNewCurrency] = useState("");
  useEffect(() => {
    const showUser = async () =>
      setUser(await (await axios.get("./jsons/tableList.json")).data);
    showUser();
  }, []);

  const showSearch = (data) => {
    return data.filter((item) => item.userName.toLowerCase().includes(search));
  };

  const getMenu = useRef();
  const getUser = useRef();
  const handleMenu = () => {
    getMenu.current.classList.toggle("menu-active");
    setNewUser("");
    setNewPhone("");
    setNewCurrency("");
    document.getElementById("new-user").value = "";
    document.getElementById("new-phone").value = "";
    document.getElementById("new-currency").value = "";
  };
  const handleUser = () => {
    getUser.current.classList.toggle("user-active");
  };
  if (!user) return null;

  return (
    <Router>
      <div className="w-full min-h-screen relative overflow-x-hidden">
        <nav className="flex w-full justify-center">
          <div className="w-[25%] flex menu">
            <div className="bars-menu w-[20%] min-h-[80px] flex justify-center items-center text-3xl">
              <div className="cursor-pointer" onClick={handleMenu}>
                <HiOutlineBars3CenterLeft />
              </div>
            </div>
            <div className="btn-group w-[80%] min-h-[80px] flex items-center gap-3 justify-center">
              <NavLink
                to={"/enter"}
                className="bg-green-500 hover:bg-green-600 py-1 px-4 rounded-md text-white text-xl"
              >
                Kirim
              </NavLink>
              <NavLink
                to={"/exit"}
                className="bg-green-500 hover:bg-green-600 py-1 px-4 rounded-md text-white text-xl"
              >
                Chiqim
              </NavLink>
            </div>
          </div>
          <div className="search-box w-1/4 min-h-[80px] flex justify-center items-center">
            <input
              type="search"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              className="border border-black outline-none py-1 px-4 rounded-md w-full"
            />
          </div>
          <div className="filter-box w-[40%] min-h-[80px] flex justify-center items-center">
            <div className="filter p-2 flex gap-4 text-xl rounded-md flex-wrap">
              <NavLink
                to={"/"}
                className="py-1 bg-green-500 w-[80px] rounded-md text-white text-center"
              >
                All
              </NavLink>
              <NavLink
                to={"/usd"}
                className="py-1 bg-green-500 w-[80px] rounded-md text-white text-center"
              >
                USD
              </NavLink>
              <NavLink
                to={"/uzs"}
                className="py-1 bg-green-500 w-[80px] rounded-md text-white text-center"
              >
                UZS
              </NavLink>
              <NavLink
                to={"/rubl"}
                className="py-1 bg-green-500 w-[80px] rounded-md text-white text-center"
              >
                RUBL
              </NavLink>
            </div>
          </div>
          <div className="user-box w-[10%] min-h-[80px] flex justify-center items-center text-4xl">
            <div
              className="cursor-pointer bg-white text-blue-500 rounded-full duration-300 hover:text-blue-600"
              onClick={handleUser}
            >
              <FaUserCircle />
            </div>
          </div>
        </nav>
        <div
          className="drop-dawn-menu duration-500 bg-blue-600 h-screen fixed top-0 flex py-10 items-center flex-col overflow-y-scroll"
          ref={getMenu}
        >
          <div
            className="absolute top-5 right-5 text-3xl text-white cursor-pointer"
            onClick={handleMenu}
          >
            <HiXMark />
          </div>
          <h2 className="text-white my-3 text-2xl">Foydalanuvchi Qo'shish</h2>
          <form className="bg-white w-[80%] min-h-[400px] rounded-md flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col w-full pl-[7.5%] gap-2">
              <label>Ism Kiriting</label>
              <input
                type="text"
                name="fname"
                className="w-[90%] p-2 border border-black rounded-md outline-none"
                id="new-user"
                placeholder="Ism"
                required
                onChange={(e) => setNewUser(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full pl-[7.5%] gap-2">
              <label>Telefon Raqam Kiriting</label>
              <input
                type="tel"
                name="phone"
                min={0}
                className="w-[90%] p-2 border border-black rounded-md outline-none"
                id="new-phone"
                placeholder="+998 91 100 00 00"
                required
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full pl-[7.5%] gap-2">
              <label>Qo'shimcha Ma'lumot</label>
              <textarea
                className="border border-black rounded-md resize-none py-1 px-2 w-[90%] outline-none"
                placeholder="Qo'shimcha"
              ></textarea>
            </div>
            <button
              type="submit"
              to={"/"}
              className="bg-green-500 py-2 px-4 rounded-md text-white hover:bg-green-600"
              onClick={(e) => {
                e.preventDefault();
                if (newUser && newPhone) {
                  handleMenu();
                }
              }}
            >
              Qo'shish
            </button>
          </form>
          <h2 className="text-white my-3 text-2xl">Valyuta Qo'shish</h2>
          <form className="bg-white w-[80%] min-h-[400px] rounded-md flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col w-full pl-[7.5%] gap-2">
              <label>Valyuta Nomini Kiriting</label>
              <input
                type="text"
                className="w-[90%] p-2 border border-black rounded-md outline-none"
                id="new-currency"
                placeholder="Ism"
                required
                onChange={(e) => setNewCurrency(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full pl-[7.5%] gap-2">
              <label>Qo'shimcha Ma'lumot</label>
              <textarea
                className="border border-black rounded-md resize-none py-1 px-2 w-[90%] outline-none"
                placeholder="Qo'shimcha"
              ></textarea>
            </div>
            <button
              type="submit"
              to={"/"}
              className="bg-green-500 py-2 px-4 rounded-md text-white hover:bg-green-600"
              onClick={(e) => {
                e.preventDefault();
                if (newCurrency) {
                  handleMenu();
                }
              }}
            >
              Qo'shish
            </button>
          </form>
        </div>
        <div
          className="user-menu fixed overflow-y-scroll duration-500 py-6 top-0 h-screen bg-blue-600 flex justify-center items-center flex-col gap-6"
          ref={getUser}
        >
          <div
            className="absolute top-5 left-5 text-3xl text-white cursor-pointer"
            onClick={handleUser}
          >
            <HiXMark />
          </div>
          <h1 className="text-5xl text-white">User Name</h1>
          <NavLink
            to={"/personal"}
            className="text-white py-2 px-4 rounded-md text-2xl"
            onClick={handleUser}
          >
            Shaxsiy Ma'lumotlar
          </NavLink>
        </div>
        <Routes>
          <Route path={"/"} element={<Home data={showSearch(user)} />} />
          <Route path={"/usd"} element={<Usd data={showSearch(user)} />} />
          <Route path={"/uzs"} element={<Uzs data={showSearch(user)} />} />
          <Route path={"/rubl"} element={<Rubl data={showSearch(user)} />} />
          <Route path={"/enter"} element={<Enter />} />
          <Route path={"/exit"} element={<Exit />} />
          <Route path={"/personal"} element={<Personal />} />
          <Route path={"/:name"} element={<User user={user.userName} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
