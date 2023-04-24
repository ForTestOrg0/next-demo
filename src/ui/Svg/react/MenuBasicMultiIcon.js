import * as React from "react";
function MenuBasicMultiIcon({
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
    d: "M889.062 87.806v848.388H134.938V87.806h754.124zM687.946 700.53H336.054v94.265h351.892v-94.265zm0-235.664H336.054v94.266h351.892v-94.266zm0-235.663H336.054v94.265h351.892v-94.265z"
  }));
}
const ForwardRef = React.forwardRef(MenuBasicMultiIcon);
export default ForwardRef;