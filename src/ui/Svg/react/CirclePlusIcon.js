import * as React from "react";
function CirclePlusIcon({
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
    d: "M512 32c265.09276594 0 480 214.90723406 480 480S777.09276594 992 512 992 32 777.09276594 32 512 246.90723406 32 512 32z m3.21702094 322.15148906a32.21106375 32.21106375 0 0 0-32.21106375 32.21106375v96.64340438h-96.64340438a32.21106375 32.21106375 0 1 0 0 64.43234062h96.64340438v96.64340438a32.21106375 32.21106375 0 0 0 64.43234062 0V547.43829781h96.64340438a32.21106375 32.21106375 0 0 0 0-64.43234062H547.43829781v-96.64340438a32.21106375 32.21106375 0 0 0-32.22127687-32.21106375z"
  }));
}
const ForwardRef = React.forwardRef(CirclePlusIcon);
export default ForwardRef;