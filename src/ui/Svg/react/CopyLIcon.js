import * as React from "react";
function CopyLIcon({
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
    d: "M734.24 233.33333333v720H111.99999969v-720h622.24000031zM645.36000031 323.33333333H200.79999969v540h444.48v-540zM912.00000031 53.33333333v720H823.11999969V143.33333333H245.36V53.33333333H912.00000031z"
  }));
}
const ForwardRef = React.forwardRef(CopyLIcon);
export default ForwardRef;