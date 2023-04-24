import * as React from "react";
function ExternalLinkIcon({
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
    d: "M409.6 51.2H51.2v921.6h921.6V614.4H870.4v256H153.6V153.6h256V51.2zm563.2 74.24V460.8H870.4V227.84L503.979 594.261l-72.431-72.396L799.812 153.6H563.2V51.2h409.6v70.588l1.81 1.809-1.81 1.843z"
  }));
}
const ForwardRef = React.forwardRef(ExternalLinkIcon);
export default ForwardRef;