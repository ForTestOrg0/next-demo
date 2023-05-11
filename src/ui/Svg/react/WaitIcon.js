import * as React from "react";
function WaitIcon({
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
    d: "M992 512c0-265.12000031-214.87999969-480-480-480S32 246.97599969 32 512s214.97599969 480 480 480 480-214.87999969 480-480zM100.57599969 512C100.57599969 284.83200031 284.73600031 100.57599969 512 100.57599969c227.26399969 0 411.42400031 184.15999969 411.42400031 411.42400031 0 227.26399969-184.25599969 411.42400031-411.42400031 411.42400031C284.83200031 923.42400031 100.57599969 739.20000031 100.57599969 512zM548.92800031 327.36000031h-110.784v295.42399969h221.53599938V512h-110.75199938V327.36000031z"
  }));
}
const ForwardRef = React.forwardRef(WaitIcon);
export default ForwardRef;