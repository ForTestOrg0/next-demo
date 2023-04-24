import * as React from "react";
function ExportIcon({
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
    d: "M715.788 180.598V379.44h-66.28V246.88H185.545V777.12h463.963v-132.56h66.28V843.4H119.265V180.599h596.523zm66.28 198.841L914.63 512 782.07 644.56v-66.28H450.666V445.72h331.401v-66.28z"
  }));
}
const ForwardRef = React.forwardRef(ExportIcon);
export default ForwardRef;