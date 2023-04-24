import * as React from "react";
function FilterIcon({
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
    d: "M114.551 192.717c-23.552-18.364-10.58-56.184 19.218-56.184h756.428c29.799 0 42.735 37.82 19.217 56.184L616.277 421.478v36.625a25.941 25.941 0 0118.33-7.543h208.657c14.404 0 26.078 11.708 26.078 26.18v52.327a26.112 26.112 0 01-26.078 26.18H634.607a25.941 25.941 0 01-18.33-7.544v67.414a25.941 25.941 0 0118.33-7.544h208.657c14.404 0 26.078 11.708 26.078 26.18v52.327a26.112 26.112 0 01-26.078 26.18H634.607a25.941 25.941 0 01-18.33-7.577v67.447a25.941 25.941 0 0118.33-7.543h208.657c14.404 0 26.078 11.707 26.078 26.18v52.326a26.112 26.112 0 01-26.078 26.18H634.607a25.941 25.941 0 01-18.33-7.543v28.467c0 17.34-13.994 31.403-31.266 31.403h-146.09a31.334 31.334 0 01-31.267-31.403V421.478L114.551 192.717z"
  }));
}
const ForwardRef = React.forwardRef(FilterIcon);
export default ForwardRef;