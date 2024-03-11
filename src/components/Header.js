import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="py-8 px-5 sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto bg-[#31363f]">
      <h1 className="text-center text-[#eeeeee] text-5xl sm:text-6xl">
        Github Finder <FontAwesomeIcon icon={faSquareGithub} />
      </h1>
      <p className="italic text-center text-slate-400 text-xl mt-3">
        Find info about github users
      </p>
    </div>
  );
};

export default Header;
