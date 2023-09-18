import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="mr-10 px-6 py-2 rounded-md hover:bg-sky-500 transition">
      <a className=" " href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
