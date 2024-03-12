import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceRollingEyes } from "@fortawesome/free-regular-svg-icons";

const NoResults = () => {
  return (
    <div className="sm:w-10/12 md:w-10/12 lg:w-3/5 sm:mx-auto px-7 mt-36 sm:px-0 text-neutral-500 text-2xl text-center">
      <FontAwesomeIcon icon={faFaceRollingEyes} className="text-9xl" />
      <p className="mt-5">No Results Found...</p>
    </div>
  );
};

export default NoResults;
