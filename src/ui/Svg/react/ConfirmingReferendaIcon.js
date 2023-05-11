import * as React from "react";
function ConfirmingReferendaIcon({
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
    d: "M569.20188814 108.12911502a32.58478137 32.58478137 0 0 1 46.11479325 0l338.13757269 338.13757269a32.58478137 32.58478137 0 0 1 0 46.11479325L492.38148096 953.45425408a32.58478137 32.58478137 0 0 1-46.11479325 0l-338.13757269-338.13757269a32.58478137 32.58478137 0 0 1 0-46.11479325L569.20188814 108.12911502z m117.63594581 270.52509071l-214.3379547 222.34321237-97.75434296-101.43751282-39.57528804 41.04103822 137.17929756 142.32821988 254.06357504-263.23391829-39.5752869-41.04103936z"
  }));
}
const ForwardRef = React.forwardRef(ConfirmingReferendaIcon);
export default ForwardRef;