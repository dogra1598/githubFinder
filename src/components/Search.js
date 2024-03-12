import { useEffect, useState } from "react";

import { GIT_USER_URL } from "../utils/constants";

const Search = ({ onUserData }) => {
  const [username, setUsername] = useState("");

  // implemented delayed search to improve api call
  // calling api after user has stopped typing for atleast 500 milliseconds
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const response = await fetch(GIT_USER_URL + username);
      let data = await response.json();
      if ("message" in data && data.message === "Not Found") {
        data = {};
      }
      onUserData(data);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [username]);

  return (
    <div className="sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto px-7 mt-10 sm:flex sm:px-0">
      <input
        type="text"
        name="search"
        className="block w-full rounded-md border-0 py-2 px-5 text-lg text-neutral-600 outline-none sm:mr-2 focus:outline-neutral-500 focus:outline-2 outline-offset-0 placeholder:italic"
        placeholder="enter user's github handle..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default Search;
