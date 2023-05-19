import * as React from "react";
function NayIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 14 15",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.1837 8.89238H13.0329L13.0329 8.89237C13.0329 8.89237 14.0001 8.97014 14 7.99656C14 7.99656 14 6.59462 12.5693 1.88242C12.5693 1.88242 12.1261 0.5 11.5818 0.5H5.79853C5.3954 0.5 4.36774 0.763011 4.36774 1.49337V8.89238C4.36774 8.89238 7.22906 10.9369 7.22906 13.546C7.24565 13.574 7.24948 13.6308 7.25436 13.7034C7.27324 13.984 7.30797 14.5 8.15612 14.5C8.15612 14.5 10.6753 14.2275 9.1837 8.89238ZM0.483325 8.88998H2.78814C2.78814 8.88998 3.37394 8.89717 3.37394 8.32402V0.814211C3.37394 0.814211 3.3777 0.500013 2.96214 0.500013H0.967236C0.967236 0.500013 0.475999 0.500013 0.475999 0.974884L0 8.43712C0 8.43712 0.00730824 8.88998 0.483325 8.88998Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(NayIcon);
export default ForwardRef;