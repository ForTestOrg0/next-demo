import * as React from "react";
function AccountElementIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M301.01 537.88c26.856 0 49.617 21.69 49.617 49.617 0 130.327 105.518 235.846 235.846 235.846 27.927 0 49.664 21.736 49.664 48.593 0 26.903-21.737 49.664-49.664 49.664-185.158 0-335.128-149.97-335.128-334.103 0-26.904 21.737-49.618 49.664-49.618zm570.926-151.087c26.903 0 49.664 21.736 49.664 49.664 0 184.087-149.97 334.103-335.127 334.103a49.664 49.664 0 010-99.328c130.327 0 235.846-105.472 235.846-235.8 0-25.879 22.76-48.64 49.617-48.64zm-434.409-133.4a49.664 49.664 0 010 99.328 235.706 235.706 0 00-235.846 235.8c-1.024 25.879-22.76 48.64-49.617 48.64a49.664 49.664 0 01-49.664-49.664c0-184.088 149.97-334.104 335.127-334.104zm1.024-150.993c185.158 0 335.128 149.97 335.128 334.103a49.664 49.664 0 01-99.282 0c0-130.327-105.518-235.846-235.846-235.846-27.927 0-49.617-21.736-49.617-48.593 0-26.903 21.69-49.664 49.617-49.664z"
  }));
}
const ForwardRef = React.forwardRef(AccountElementIcon);
export default ForwardRef;