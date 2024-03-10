import { useState } from "react";

import { GIT_USER_URL } from "../utils/constants";

const Search = ({ onUserData }) => {
  const [username, setUsername] = useState("");

  const onChangeusername = (event) => {
    setUsername(event.target.value);
  };

  const onSearchUser = async () => {
    if (username.trim()) {
      setUsername("");
      const response = await fetch(GIT_USER_URL + username);
      const data = await response.json();
      onUserData(data);
    }
  };

  return (
    <div className="sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto px-7 mt-10 sm:flex sm:px-0">
      <input
        type="text"
        name="search"
        className="block w-full rounded-md border-0 py-2 px-5 text-lg text-neutral-600 outline-none sm:mr-2 sm:py-0 focus:outline-neutral-500 focus:outline-2 outline-offset-0"
        value={username}
        onChange={onChangeusername}
      />
      <button
        className="bg-blue-500 text-white text-lg w-full rounded-md py-2 mt-3 sm:w-2/6 sm:mt-0 cursor-pointer hover:bg-blue-600"
        onClick={onSearchUser}
      >
        Search User
      </button>
    </div>
  );
};

export default Search;
