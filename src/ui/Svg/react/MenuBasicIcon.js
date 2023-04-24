import * as React from "react";
function MenuBasicIcon({
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
    d: "M912.498 61.44H111.502v901.12h800.996V61.44zM698.887 211.627H325.113V311.75h373.774V211.627zm-373.774 250.31h373.774v100.125H325.113V461.938zM698.887 712.25H325.113v100.124h373.774V712.25z"
  }));
}
const ForwardRef = React.forwardRef(MenuBasicIcon);
export default ForwardRef;