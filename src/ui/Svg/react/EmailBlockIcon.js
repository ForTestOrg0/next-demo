import * as React from "react";
function EmailBlockIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M20 0H0V20H20V0ZM16.4286 7.14274L10 9.99997L3.57149 7.14274V5.71426H16.4286L16.4286 7.14274ZM3.57144 7.4999V14.9999H16.4285V7.4999L10 10.8333L3.57144 7.4999Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(EmailBlockIcon);
export default ForwardRef;