import * as React from "react";
function AssetIcon({
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
    d: "M970.991 395.387a106.214 106.214 0 00-105.924-105.883H211.874a52.03 52.03 0 01-52.941-52.982c0-29.992 24.69-52.942 52.941-52.942h600.252c29.992 0 52.941-22.95 52.941-52.983 0-29.992-22.95-52.941-52.941-52.941h-52.983 35.294-635.504A106.214 106.214 0 0053.009 183.58V854.38a106.214 106.214 0 00105.924 105.924h706.134A106.214 106.214 0 00970.991 854.38V395.387zM617.924 624.883c0-29.992 22.95-52.941 52.942-52.941h141.26c29.992 0 52.941 22.95 52.941 52.983 0 29.991-22.95 52.94-52.941 52.94h-141.26a52.03 52.03 0 01-52.942-52.94z"
  }));
}
const ForwardRef = React.forwardRef(AssetIcon);
export default ForwardRef;