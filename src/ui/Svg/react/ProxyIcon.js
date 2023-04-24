import * as React from "react";
function ProxyIcon({
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
    d: "M921.6 136.533v307.2H614.4v-102.4H477.867v124.11l53.623 53.623-53.623 53.623v109.978H614.4v-102.4h307.2v307.2H614.4V750.933H409.6V640.956L290.133 760.422 48.777 519.1l241.356-241.425L409.6 397.14V273.067h204.8V136.533h307.2zm-68.267 512H682.667V819.2h170.666V648.533zm0-443.733H682.667v170.667h170.666V204.8z"
  }));
}
const ForwardRef = React.forwardRef(ProxyIcon);
export default ForwardRef;