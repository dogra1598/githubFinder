import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const GitRepos = ({
  repoName,
  repoDesc,
  createdAt,
  updatedAt,
  stars,
  watch,
  language,
  forks,
}) => {
  return (
    <div className="border-2 border-[#31363f] rounded-xl p-4 text-[#31363f] w-full break-words flex flex-col  justify-between cursor-pointer hover:bg-[#31363f] hover:text-[#eeeeee]">
      <p className="text-lg mb-4">{repoName}</p>
      <div className="grid grid-cols-3">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} />
          <p className="text-xl pl-2">{stars}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEye} />
          <p className="text-xl pl-2">{watch}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCodeFork} />
          <p className="text-xl pl-2">{forks}</p>
        </div>
      </div>
    </div>
  );
};

export default GitRepos;
