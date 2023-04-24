import * as React from "react";
function CopySolidIcon({
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
    d: "M925.488 45.966c29.011 0 52.546 23.185 52.546 51.769V770.92c0 28.583-23.535 51.768-52.546 51.768h-210.18v103.576c0 28.584-23.497 51.769-52.546 51.769H137.309a52.157 52.157 0 01-52.507-51.769V253.08c0-28.583 23.535-51.768 52.546-51.768h210.18V97.735c0-28.584 23.497-51.769 52.546-51.769h525.453zm0 51.769H400.035V201.31h262.727c29.05 0 52.545 23.185 52.545 51.768v517.842h210.181V97.735z"
  }));
}
const ForwardRef = React.forwardRef(CopySolidIcon);
export default ForwardRef;