import * as React from "react";
function BestBlockIcon({
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
    d: "M828.235 376.47v387.314L496.941 916.78V471.04l243.35-112.339a228.02 228.02 0 01-60.235-38.25l-213.232 98.184L147.275 271.06l319.549-147.577 138.842 64.15a214.558 214.558 0 01-3.313-37.044c.06-10.09.783-20.118 2.108-30.117L479.473 62.946a30.118 30.118 0 00-25.299 0L62.644 243.652a30.118 30.118 0 00-17.468 27.407v512a30.118 30.118 0 0017.469 27.407l391.53 180.706a30.118 30.118 0 0025.298 0l391.53-180.706a30.118 30.118 0 0017.468-27.407V368.038a222.027 222.027 0 01-60.236 8.433zm0-75.294a150.588 150.588 0 100-301.176 150.588 150.588 0 000 301.176z"
  }));
}
const ForwardRef = React.forwardRef(BestBlockIcon);
export default ForwardRef;