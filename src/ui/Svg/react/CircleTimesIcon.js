import * as React from "react";
function CircleTimesIcon({
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
    d: "M992 512c0-264.8-215.2-480-480-480S32 247.2 32 512s215.2 480 480 480 480-215.2 480-480zM705.92 366.208l-145.44 145.44L705.952 657.12l-48.48 48.48L512 560.16 366.528 705.6l-48.48-48.48L463.52 511.648l-145.472-145.44 48.48-48.48L512 463.168l145.472-145.44 48.48 48.48z"
  }));
}
const ForwardRef = React.forwardRef(CircleTimesIcon);
export default ForwardRef;