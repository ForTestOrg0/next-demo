import * as React from "react";
function BlockchainHistorySizeIcon({
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
    d: "M896 640h85.345v85.345H896V640zm0-170.655h85.345v85.31H896v-85.31zm85.345 341.31H896V896c42.655 0 85.345-42.655 85.345-85.345zM554.655 128H640v85.345h-85.345V128zM896 298.655h85.345V384H896v-85.345zM896 128v85.345h85.345c0-42.69-42.69-85.345-85.345-85.345zM42.655 298.655H128V384H42.655v-85.345zM725.345 128h85.31v85.345h-85.31V128zm0 682.655h85.31V896h-85.31v-85.345zM128 128c-42.655 0-85.345 42.655-85.345 85.345H128V128zm256 0h85.345v85.345H384V128zm-170.655 0h85.31v85.345h-85.31V128zM42.655 469.345v341.31A85.592 85.592 0 00128 896h512V469.345H42.655z"
  }));
}
const ForwardRef = React.forwardRef(BlockchainHistorySizeIcon);
export default ForwardRef;