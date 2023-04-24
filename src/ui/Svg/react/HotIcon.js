import * as React from "react";
function HotIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1075 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M914.964 573.807c0-46.168-25.85-148.26-81.898-251.41-.994 34.487-29.702 118.062-50.766 140.308-14.168-38.96-17.71-298.883-369.41-386.311 21.438 258.493-242.648 254.765-242.648 533.702 0 148.198 91.156 275.705 221.708 332.313-29.826-171.004 143.538-193 115.576-369.161 182.561 106.504 225.56 231.153 176.16 373.075a374.567 374.567 0 00231.278-372.516z"
  }));
}
const ForwardRef = React.forwardRef(HotIcon);
export default ForwardRef;