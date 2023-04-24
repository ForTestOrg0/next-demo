import * as React from "react";
function SymbolAIcon({
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
    d: "M212.67 84.385a85.523 85.523 0 00-85.524 85.523V811.33a85.523 85.523 0 0085.523 85.523h641.423a85.523 85.523 0 0085.523-85.523V169.908a85.523 85.523 0 00-85.523-85.523H212.67zm237.155 544.268l-24.289 68.975h-86.464L489.978 296.31h87.02l150.948 401.317h-88.773l-24.289-68.975h-165.06zm138.504-74.02l-55.419-156.55H531.8L476.422 554.59H588.33z"
  }));
}
const ForwardRef = React.forwardRef(SymbolAIcon);
export default ForwardRef;