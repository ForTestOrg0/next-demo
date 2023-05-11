import * as React from "react";
function CircleTimesIcon({
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
    d: "M992 512c0-264.79999969-215.20000031-480-480-480S32 247.20000031 32 512s215.20000031 480 480 480 480-215.20000031 480-480z m-286.08-145.79200031l-145.44 145.44 145.47199969 145.47200062-48.48 48.48L512 560.16000031l-145.47199969 145.44-48.48-48.48 145.47199969-145.47200062-145.47199969-145.44 48.48-48.48L512 463.16799969l145.47199969-145.44 48.48 48.48z"
  }));
}
const ForwardRef = React.forwardRef(CircleTimesIcon);
export default ForwardRef;