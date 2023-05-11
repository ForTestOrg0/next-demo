import * as React from "react";
function SymbolFIcon({
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
    d: "M212.66934476 84.38477692a85.52304436 85.52304436 0 0 0-85.52304567 85.52304436v641.42283396a85.52304436 85.52304436 0 0 0 85.52304567 85.52304567h641.42283396a85.52304436 85.52304436 0 0 0 85.52304436-85.52304567v-641.42283396a85.52304436 85.52304436 0 0 0-85.52304436-85.52304436h-641.42283396z m265.42076762 470.2484604v165.61537639h-82.52973787v-401.31688652h266.23323797v75.73065589h-183.7035001v84.24019836h175.19395764v75.68789469h-175.19395764z"
  }));
}
const ForwardRef = React.forwardRef(SymbolFIcon);
export default ForwardRef;