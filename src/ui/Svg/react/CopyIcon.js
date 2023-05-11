import * as React from "react";
function CopyIcon({
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
    d: "M260.62559901 80.85941244h628.43600174v678.71088134h-83.80822562V165.67313465H260.62559901V80.85941244z m460.86982637 169.67772032v678.71088136H134.93839925v-678.71088136h586.55702613zM637.68719975 335.40113087H218.74662487v508.98288515H637.68719975V335.40113087z"
  }));
}
const ForwardRef = React.forwardRef(CopyIcon);
export default ForwardRef;