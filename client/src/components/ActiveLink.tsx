// components/ActiveLink.jsx
import { NavLink } from "react-router-dom";

function ActiveLink({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  to,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  children,
  className = "",
}) {
  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) =>
          isActive
            ? `text-blue-500 font-bold underline ${className}` // Active style
            : `text-gray-700 hover:text-blue-500 ${className}` // Default style
      }
    >
      {children}
    </NavLink>
  );
}

export default ActiveLink;
