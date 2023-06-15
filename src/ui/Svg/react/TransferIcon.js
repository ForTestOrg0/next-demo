import * as React from "react";
function TransferIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 5288,
    t: 1686555425973,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M925.71636406 591.98545438V752H443.05454562V992l-357.81818156-345.94909125a31.50545437 31.50545437 0 0 1 21.73090875-54.06545438H925.67272719zM580.98909125 32l357.81818156 345.94909125a31.50545437 31.50545437 0 0 1-21.77454562 54.06545438H98.32727281V272H580.94545438V32z",
    "p-id": 5289
  }));
}
const ForwardRef = React.forwardRef(TransferIcon);
export default ForwardRef;