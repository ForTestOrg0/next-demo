import * as React from "react";
function ProxyIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M921.6 136.533333v307.2h-307.2v-102.4h-136.533333v124.1088l53.623466 53.623467L477.866667 572.689067V682.666667h136.533333v-102.4h307.2v307.2h-307.2v-136.533334h-204.8v-109.9776l-119.466667 119.466667-241.3568-241.322667L290.133333 277.674667l119.466667 119.466666V273.066667h204.8V136.533333h307.2z m-68.266667 512h-170.666666v170.666667h170.666666v-170.666667z m0-443.733333h-170.666666v170.666667h170.666666V204.8z"
  }));
}
const ForwardRef = React.forwardRef(ProxyIcon);
export default ForwardRef;