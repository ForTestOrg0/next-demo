import * as React from "react";
function SubaccountIcon({
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
    d: "M512 46.545c257.07 0 465.455 208.384 465.455 465.455S769.07 977.455 512 977.455 46.545 769.07 46.545 512 254.93 46.545 512 46.545zm5.26 186.182a115.619 115.619 0 00-116.504 114.316 115.2 115.2 0 0097.28 114.316v15.825c-90.065 7.494-177.105 79.034-184.878 169.1-19.55 6.283-33.978 24.53-33.978 46.08a49.105 49.105 0 0098.21.93 48.221 48.221 0 00-29.742-45.242c6.889-71.493 78.941-128.651 150.342-136.145l-.605 93.696a48.5 48.5 0 00-31.512 45.149 49.105 49.105 0 0098.165.93 48.36 48.36 0 00-32.117-46.08l.606-93.09c70.795 8.704 141.637 65.536 148.247 136.75a48.593 48.593 0 00-34.211 46.08 49.105 49.105 0 0098.118.931c0-20.386-12.009-37.701-29.417-45.521-5.679-90.67-92.16-164.305-182.458-173.242v-15.826a115.06 115.06 0 0099.049-112.826 115.619 115.619 0 00-114.595-116.13z"
  }));
}
const ForwardRef = React.forwardRef(SubaccountIcon);
export default ForwardRef;