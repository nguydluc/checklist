import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className="font-body h-min-screen">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
