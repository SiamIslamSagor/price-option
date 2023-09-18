import PropTypes from "prop-types";
import { BsCheckCircleFill } from "react-icons/bs";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <BsCheckCircleFill className="text-green-400"></BsCheckCircleFill>{" "}
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
