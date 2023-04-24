import * as React from "react";
function CollatorsIcon({
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
    d: "M278.983 84.802a38.836 38.836 0 0138.836 38.837v38.836h116.509a38.836 38.836 0 0138.836 38.836v271.853h77.672V356.655a77.672 77.672 0 0177.672-77.672h271.853a77.672 77.672 0 0177.673 77.672v310.69a77.672 77.672 0 01-77.673 77.672H628.508a77.672 77.672 0 01-77.672-77.672V550.836h-77.672V822.69a38.836 38.836 0 01-34.292 38.564l-4.544.272H317.819v38.836a38.836 38.836 0 01-38.836 38.837H123.64a38.836 38.836 0 01-38.837-38.837V745.017a38.836 38.836 0 0138.837-38.836h155.344a38.836 38.836 0 0138.836 38.836v38.836h77.673V550.836h-77.673v38.836a38.836 38.836 0 01-38.836 38.836H123.64a38.836 38.836 0 01-38.837-38.836V434.328a38.836 38.836 0 0138.837-38.836h155.344a38.836 38.836 0 0138.836 38.836v38.836h77.673V240.147h-77.673v38.836a38.836 38.836 0 01-38.836 38.836H123.64a38.836 38.836 0 01-38.837-38.836V123.64a38.836 38.836 0 0138.837-38.837h155.344z"
  }));
}
const ForwardRef = React.forwardRef(CollatorsIcon);
export default ForwardRef;