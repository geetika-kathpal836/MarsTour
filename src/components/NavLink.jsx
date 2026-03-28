import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";
const NavLink = forwardRef(({
  className = "",
  activeClassName = "",
  pendingClassName = "",
  to,
  ...props
}, ref) => {
  return <RouterNavLink ref={ref} to={to} className={({
    isActive,
    isPending
  }) => {
    let cls = className;
    if (isActive && activeClassName) cls += ` ${activeClassName}`;
    if (isPending && pendingClassName) cls += ` ${pendingClassName}`;
    return cls.trim();
  }} {...props} />;
});
NavLink.displayName = "NavLink";
export { NavLink };