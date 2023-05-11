import * as React from "react";
function CheckCircleIcon({
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
    d: "M512 32c265.12000031 0 480 214.87999969 480 480s-214.97599969 480-480 480S32 777.02400031 32 512 246.87999969 32 512 32z m0 68.57599969C284.73600031 100.57599969 100.57599969 284.79999969 100.57599969 512 100.57599969 739.16799969 284.79999969 923.42400031 512 923.42400031c227.16799969 0 411.42400031-184.15999969 411.42400031-411.42400031 0-227.26399969-184.15999969-411.42400031-411.42400031-411.42400031z m206.208 222.528l48.48 48.48-274.752 274.78400062-48.48 48.51199969-169.69600031-169.69600031 48.48-48.51199969 121.18400062 121.21600031 274.78399969-274.78400062z"
  }));
}
const ForwardRef = React.forwardRef(CheckCircleIcon);
export default ForwardRef;