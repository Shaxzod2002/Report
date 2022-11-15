import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const showUser = async () =>
      setUser(await (await axios.get("./jsons/tableList.json")).data);
    showUser();
  }, []);

  let params = useParams();
  if (!user) return null;
  return (
    <>
      {user.map((item) =>
        item.userName === params.name ? (
          <div key={item.id}>
            <h1>{item.userName}</h1>
            <p>{item.rubl}</p>
          </div>
        ) : null
      )}
    </>
  );
};

export default User;
