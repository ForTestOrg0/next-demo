import * as React from "react";
function FromToIcon({
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
    d: "M654.42058028 322.85242405a38.23548279 38.23548279 0 0 0-59.44519824 31.81457257v90.80409293H146.50590034a38.23548279 38.23548279 0 0 0-38.23548279 38.23548158v85.75021511c0 21.12686459 17.15004302 38.23548279 38.23548279 38.23548279h448.4694817v90.80409293a38.23548279 38.23548279 0 0 0 59.44519824 31.81457257l257.8720237-171.91468328a38.23548279 38.23548279 0 0 0 0-63.62914513l-257.8720237-171.91468207z"
  }));
}
const ForwardRef = React.forwardRef(FromToIcon);
export default ForwardRef;