import * as React from "react";
function MenuBasicMultiIcon({
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
    d: "M889.06160122 87.80569917v848.38860166H134.93839878V87.80569917h754.12320244z m-201.11523223 612.72510074h-351.89273798v94.26540066h351.89273798v-94.26540066z m0-235.66349955h-351.89273798v94.26539928h351.89273798v-94.26539928z m0-235.66350093h-351.89273798v94.26540066h351.89273798V229.20379943z"
  }));
}
const ForwardRef = React.forwardRef(MenuBasicMultiIcon);
export default ForwardRef;