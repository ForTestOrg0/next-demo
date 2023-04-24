import * as React from "react";
function AddressIcon({
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
    d: "M512 75.093c241.282 0 436.907 195.625 436.907 436.907S753.282 948.907 512 948.907 75.093 753.282 75.093 512 270.718 75.093 512 75.093zM388.72 372.736c-75.076 0-120.514 61.458-120.514 159.799 0 98.777 45.001 160.417 120.514 160.417 75.33 0 120.149-62.077 120.149-160.636s-45.256-159.58-120.15-159.58zM608.775 500.24H560.97l60.075 93.498-60.73 93.025h45.547l39.103-67.43h1.02l39.248 67.43h46.604l-59.565-94.227 60.22-92.296H685.89l-37.865 66.046h-.874l-38.375-66.046zM388.72 417.737c40.34 0 64.443 42.89 64.443 114.798 0 72.526-23.666 115.416-64.443 115.416-40.96 0-65.063-43.108-65.063-115.635 0-71.252 24.54-114.579 65.063-114.579z"
  }));
}
const ForwardRef = React.forwardRef(AddressIcon);
export default ForwardRef;