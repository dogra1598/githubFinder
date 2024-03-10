const GitUser = ({ userData }) => {
  if (!userData && typeof userData === "object") {
    return (
      <div className="sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto px-7 mt-10 sm:flex sm:px-0">
        Git User
      </div>
    );
  }

  const { name, login, avatar_url, followers, following, email } = userData;

  return (
    <div className="sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto px-7 mt-10 sm:flex sm:px-0">
      <div className="flex justify-center items-center py-5 w-full">
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
    </div>
  );
};

export default GitUser;
