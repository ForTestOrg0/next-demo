import * as React from "react";
function InvulnerblesIcon({
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
    d: "M891.662 512c0 57.982 35.73 107.576 86.372 128.043a480.131 480.131 0 01-45.982 110.916 138.101 138.101 0 00-181.093 181.093 481.208 481.208 0 01-110.916 45.982 138.101 138.101 0 00-256.086 0 480.209 480.209 0 01-110.916-45.982A138.101 138.101 0 0091.948 750.959a480.325 480.325 0 01-45.982-110.916 138.101 138.101 0 000-256.086 481.208 481.208 0 0145.982-110.916A138.101 138.101 0 00273.041 91.948a481.208 481.208 0 01110.916-45.982 138.101 138.101 0 00256.086 0 481.208 481.208 0 01110.916 45.982 138.101 138.101 0 00181.093 181.093 481.208 481.208 0 0145.982 110.916A138.101 138.101 0 00891.662 512zM512 378.83a133.17 133.17 0 100 266.34 133.17 133.17 0 000-266.34z"
  }));
}
const ForwardRef = React.forwardRef(InvulnerblesIcon);
export default ForwardRef;