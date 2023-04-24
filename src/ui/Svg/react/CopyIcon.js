import * as React from "react";
function CopyIcon({
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
    d: "M260.626 80.86h628.436v678.71h-83.809V165.673H260.626V80.86zm460.87 169.677v678.711H134.937v-678.71h586.557zm-83.809 84.864h-418.94v508.983h418.94V335.401z"
  }));
}
const ForwardRef = React.forwardRef(CopyIcon);
export default ForwardRef;