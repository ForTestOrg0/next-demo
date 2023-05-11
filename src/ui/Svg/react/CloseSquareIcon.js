import * as React from "react";
function CloseSquareIcon({
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
    d: "M912.00000031 32a79.99999969 79.99999969 0 0 1 79.99999969 79.99999969v800.00000062a79.99999969 79.99999969 0 0 1-79.99999969 79.99999969H111.99999969a79.99999969 79.99999969 0 0 1-79.99999969-79.99999969V111.99999969a79.99999969 79.99999969 0 0 1 79.99999969-79.99999969h800.00000062zM368 272L272 368 416 512 272 656 368 752l144-144 144 144 96-96-144-144L752 368 656 272 512 416 368 272z"
  }));
}
const ForwardRef = React.forwardRef(CloseSquareIcon);
export default ForwardRef;