import React, { useState } from "react";

import GitUser from "./GitUser";
import Search from "./Search";
import NoResults from "./NoResults";

const Body = () => {
  const [userData, setUserData] = useState({});

  const onUserData = (data) => {
    setUserData(data);
  };

  return (
    <React.Fragment>
      <Search onUserData={onUserData} />
      {Object.keys(userData).length > 0 ? (
        <GitUser userData={userData} />
      ) : (
        <NoResults />
      )}
    </React.Fragment>
  );
};

export default Body;
