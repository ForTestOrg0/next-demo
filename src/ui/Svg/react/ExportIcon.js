import * as React from "react";
function ExportIcon({
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
    d: "M715.78810471 180.59820247V379.43928098h-66.28035952V246.87856197H185.54522864v530.24287606h463.96251655v-132.56071901H715.78810471v198.84107851H119.26486914v-662.80359506H715.78810471z m66.2803595 198.84107851l132.560719 132.56071902-132.560719 132.56071902v-66.28035952H450.66666668v-132.560719h331.40179753V379.43928098z"
  }));
}
const ForwardRef = React.forwardRef(ExportIcon);
export default ForwardRef;