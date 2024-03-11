import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faEye,
  faStar,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const GitRepos = ({ repoName, repoDesc, stars, watch, language, forks }) => {
  return (
    <div className="border-2 border-[#31363f] rounded-lg p-4 text-[#31363f] w-full break-words flex flex-col  justify-between cursor-pointer hover:bg-[#31363f] hover:text-[#eeeeee]">
      <div className="mb-4">
        <p className="text-lg">{repoName}</p>
        {language && (
          <p>
            <FontAwesomeIcon icon={faLaptopCode} />:{" "}
            <span className="italic">{language}</span>
          </p>
        )}
      </div>
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
