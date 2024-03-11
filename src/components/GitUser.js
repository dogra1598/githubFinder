import { useEffect, useState } from "react";
import GitRepos from "./GitRepos";

const GitUser = ({ userData }) => {
  const { name, login, avatar_url, followers, following, email, repos_url } =
    userData;

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getReops();
  }, [repos_url]);

  const getReops = async () => {
    const response = await fetch(repos_url);
    const data = await response.json();
    setRepos(data);
  };

  return (
    <div className="sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto px-7 mt-10 sm:px-0">
      <div className="flex justify-center items-center py-5 pt-0 w-full">
        <div className="w-2/5 sm:w-1/4 rounded-full overflow-hidden mr-5">
          <img src={avatar_url} alt="user avatar" />
        </div>
        <div className="text-lg sm:text-2xl text-[#31363f]">
          <p className="font-bold">
            Git handle:{" "}
            <span className="font-normal italic text-neutral-600">{login}</span>
          </p>
          <p className="font-bold">
            Name:{" "}
            <span className="font-normal italic text-neutral-600">{name}</span>
          </p>
          {email && (
            <p className="font-bold">
              Email:{" "}
              <span className="font-normal italic text-neutral-600">
                {email}
              </span>
            </p>
          )}
          <p className="font-bold">
            Followers:{" "}
            <span className="font-normal italic text-neutral-600">
              {followers}
            </span>
          </p>
          <p className="font-bold">
            Following:{" "}
            <span className="font-normal italic text-neutral-600">
              {following}
            </span>
          </p>
        </div>
      </div>
      <h1 className="mt-5 mb-3 text-2xl text-[#31363f] font-semibold">
        Github Repos
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 mb-5">
        {repos.map((repo) => (
          <GitRepos
            key={repo.id}
            repoName={repo?.name}
            repoDesc={repo?.description}
            createdAt={repo?.created_at}
            updatedAt={repo?.update_at}
            stars={repo?.stargazers_count}
            watch={repo?.watchers_count}
            language={repo?.language}
            forks={repo?.forks}
          />
        ))}
      </div>
    </div>
  );
};

export default GitUser;
