import * as React from "react";
function ExtrinsicsIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 5002,
    t: 1686555417797,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M512 854.88000031V992H58.66666625v-137.11999969h453.33333375z m453.33333375-274.29333375v137.11999969H58.66666625v-137.11999969h906.6666675zM965.33333375 32v411.41333344H58.66666625V32h906.6666675z",
    "p-id": 5003
  }));
}
const ForwardRef = React.forwardRef(ExtrinsicsIcon);
export default ForwardRef;