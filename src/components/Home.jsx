import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <header className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <table className="border w-[800px] max-h-[90%]">
        <thead>
          <tr className="border-b h-10">
            <th>Ismi</th>
            <th>USD</th>
            <th>UZS</th>
            <th>RUBL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b text-center h-10 cursor-pointer hover:bg-gray-200"
            >
              <td>
                <Link to={item.userName}> {item.userName} </Link>
              </td>
              <td>
                <Link to={item.userName}> {item.usd} </Link>
              </td>
              <td>
                <Link to={item.userName}> {item.uzs} </Link>
              </td>
              <td>
                <Link to={item.userName}> {item.rubl} </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </header>
  );
};

export default Home;
