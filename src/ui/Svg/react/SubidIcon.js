import * as React from "react";
function SubidIcon({
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
    d: "M551.904 625.34c73.182 0 105.804-45.146 105.804-113.34s-32.586-113.34-105.804-113.34H502.28v226.68h49.625zM948.907 512c0-241.282-195.625-436.907-436.907-436.907S75.093 270.718 75.093 512 270.718 948.907 512 948.907 948.907 753.282 948.907 512zm-655.36-182.044h68.958v364.088h-68.958V329.956zM730.453 512c0 105.622-62.368 182.044-176.656 182.044H433.32V329.956h120.477c114.324 0 176.656 76.422 176.656 182.044z"
  }));
}
const ForwardRef = React.forwardRef(SubidIcon);
export default ForwardRef;