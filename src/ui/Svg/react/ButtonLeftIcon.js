import * as React from "react";
function ButtonLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 2362,
    t: 1688460773438,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M773.888 154.112L416 512l357.888 357.888-96 96L224 512 677.888 58.112l96 96z",
    "p-id": 2363
  }));
}
const ForwardRef = React.forwardRef(ButtonLeftIcon);
export default ForwardRef;