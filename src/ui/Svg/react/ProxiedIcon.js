import * as React from "react";
function ProxiedIcon({
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
    d: "M730.66666667 100.352L934.31466636 303.99999969 730.66666667 507.64800031l-155.64799969-155.68000031H458.66666698v319.99999969h116.352l155.64799969-155.616 203.64799969 203.64800062-203.64799969 203.64799969-187.64800031-187.68L394.66666667 735.99999969v-187.68h-48v98.304h-256.00000031v-255.99999938h256.00000031v93.696H394.66666667V288.00000031l148.35199969-0.03200062L730.66666667 100.352zM298.66666667 447.99999969H138.66666636v140.80000031h160.00000031V447.99999969z"
  }));
}
const ForwardRef = React.forwardRef(ProxiedIcon);
export default ForwardRef;