import * as React from "react";
function WhitePaperIcon({
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
    d: "M802.64 56.323V651.23H213.282a101.243 101.243 0 00-101.285 101.243v54.682a104.309 104.309 0 00104.309 104.308h693.665l.994-777.137h56.711v833.351H217.342a161.02 161.02 0 01-161.02-161.02V217.343a161.02 161.02 0 01161.02-161.02H802.64zm-68.477 683.516c34.59 0 62.635 25.518 62.635 56.96 0 31.483-28.044 56.96-62.635 56.96H232.918c-34.631 0-62.676-25.519-62.676-56.96 0-31.484 28.045-56.96 62.635-56.96h501.245z"
  }));
}
const ForwardRef = React.forwardRef(WhitePaperIcon);
export default ForwardRef;