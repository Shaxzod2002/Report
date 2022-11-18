import React from "react";
import { Link } from "react-router-dom";
const Usd = ({ data }) => {
  return (
    <header className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <table className="border w-[800px] max-h-[90%]">
        <thead>
          <tr>
            <th>Ismlar</th>
            <th>USD</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b text-center h-10 cursor-pointer hover:bg-gray-200"
            >
              <td>
                <Link
                  to={item.userName}
                  className="w-full h-10 flex justify-center items-center"
                >
                  {item.userName}
                </Link>
              </td>
              <td>
                <Link
                  to={item.userName}
                  className="w-full h-10 flex justify-center items-center"
                >
                  {item.usd}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </header>
  );
};

export default Usd;
