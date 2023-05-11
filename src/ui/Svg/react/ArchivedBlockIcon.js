import * as React from "react";
function ArchivedBlockIcon({
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
    d: "M914.59985 214.76l-390-180a30 30 0 0 0-25.2 0l-390 180a30 30 0 0 0-17.4 27.3v510a30 30 0 0 0 17.4 27.3l390 180a30 30 0 0 0 25.2 0l390-180a30 30 0 0 0 17.4-27.3v-510a30 30 0 0 0-17.4-27.3zM511.99985 389.06l-318.3-147L511.99985 95.06l318.3 147-318.3 147z m360 343.8l-330 152.4v-444l330-152.4v444z"
  }));
}
const ForwardRef = React.forwardRef(ArchivedBlockIcon);
export default ForwardRef;