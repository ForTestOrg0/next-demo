import * as React from "react";
function ExternalLinkIcon({
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
    d: "M409.6 51.2H51.2v921.6h921.6V614.4h-102.4v256h-716.8v-716.8H409.6v-102.4z m563.2 74.24V460.8h-102.4V227.84L503.978667 594.261333l-72.430934-72.3968L799.812267 153.6H563.2v-102.4h409.6v70.587733l1.809067 1.809067-1.809067 1.8432z"
  }));
}
const ForwardRef = React.forwardRef(ExternalLinkIcon);
export default ForwardRef;