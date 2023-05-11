import * as React from "react";
function SymbolAIcon({
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
    d: "M212.66934476 84.38477692a85.52304436 85.52304436 0 0 0-85.52304567 85.52304436v641.42283396a85.52304436 85.52304436 0 0 0 85.52304567 85.52304567h641.42283396a85.52304436 85.52304436 0 0 0 85.52304436-85.52304567v-641.42283396a85.52304436 85.52304436 0 0 0-85.52304436-85.52304436h-641.42283396z m237.15540215 544.26865581l-24.28854517 68.97433508h-86.46379827l150.90541244-401.31688652h87.01969759l150.94817364 401.31688652h-88.77292056l-24.28854389-68.97433508h-165.05947578z m138.50457079-74.02019541l-55.41893356-156.549932h-1.11179996l-55.37617108 156.50717081h111.9069046z"
  }));
}
const ForwardRef = React.forwardRef(SymbolAIcon);
export default ForwardRef;