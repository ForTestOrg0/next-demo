import * as React from "react";
function EmailBlockIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 2428,
    t: 1684316867664,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M999.619048 24.380952H24.380952v975.238096h975.238096V24.380952z m-174.128762 348.306286L512 512 198.509714 372.687238V303.006476H825.539048v69.680762zM198.460952 390.095238v365.714286h626.93181V390.095238L512 552.618667 198.509714 390.095238z",
    "p-id": 2429
  }));
}
const ForwardRef = React.forwardRef(EmailBlockIcon);
export default ForwardRef;