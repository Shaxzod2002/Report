import React from "react";
const Uzs = ({ data }) => {
  return (
    <header className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <table className="border w-[800px] max-h-[90%]">
        <thead>
          <tr className="border-b h-10">
            <th>Ismi</th>
            <th>UZS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b text-center h-10 cursor-pointer hover:bg-gray-200"
            >
              <td>{item.userName}</td>
              <td>{item.uzs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </header>
  );
};

export default Uzs;
