import * as React from "react";
function ArchivedBlockIcon({
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
    d: "M914.6 214.76l-390-180a30 30 0 00-25.2 0l-390 180a30 30 0 00-17.4 27.3v510a30 30 0 0017.4 27.3l390 180a30 30 0 0025.2 0l390-180a30 30 0 0017.4-27.3v-510a30 30 0 00-17.4-27.3zM512 389.06l-318.3-147 318.3-147 318.3 147-318.3 147zm360 343.8l-330 152.4v-444l330-152.4v444z"
  }));
}
const ForwardRef = React.forwardRef(ArchivedBlockIcon);
export default ForwardRef;