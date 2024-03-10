import React, { useState } from "react";

import GitUser from "./GitUser";
import Search from "./Search";

const Body = () => {
  const [userData, setUserData] = useState(null);

  const onUserData = (data) => {
    setUserData(data);
  };

  return (
    <React.Fragment>
      <Search onUserData={onUserData} />
      <GitUser userData={userData} />
    </React.Fragment>
  );
};

export default Body;
