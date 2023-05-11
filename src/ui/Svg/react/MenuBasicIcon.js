import * as React from "react";
function MenuBasicIcon({
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
    d: "M912.49777813 61.44H111.50222187v901.12h800.99555626V61.44zM698.88682667 211.62666667H325.11317333V311.75111147h373.77365334V211.62666667zM325.11317333 461.93777813h373.77365334v100.12444374H325.11317333v-100.12444374zM698.88682667 712.24888853H325.11317333v100.1244448h373.77365334V712.24888853z"
  }));
}
const ForwardRef = React.forwardRef(MenuBasicIcon);
export default ForwardRef;