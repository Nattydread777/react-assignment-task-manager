import React from "react";
import PropTypes from "prop-types";

/**
 * Card component for displaying content in a boxed layout.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional Tailwind classes
 * @returns {JSX.Element} - Card component
 */
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
