import * as React from "react";
function ProxiedIcon({
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
    d: "M730.667 100.352L934.315 304 730.667 507.648l-155.648-155.68H458.667v320h116.352l155.648-155.616L934.315 720 730.667 923.648l-187.648-187.68-148.352.032V548.32h-48v98.304h-256v-256h256v93.696h48V288l148.352-.032 187.648-187.616zM298.667 448h-160v140.8h160V448z"
  }));
}
const ForwardRef = React.forwardRef(ProxiedIcon);
export default ForwardRef;