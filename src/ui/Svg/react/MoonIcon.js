import * as React from "react";
function MoonIcon({
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
    d: "M510.93333313 992C259.73333375 992 53.65333344 799.25333375 32 553.70666656a44.80000031 44.80000031 0 0 1 78.93333375-26.82666656c0.26666625 0.37333313 0.64000031 0.10666688 0.63999938-0.90666656a290.4 290.4 0 0 0 212.26666687 91.84000031 293.92000031 293.92000031 0 0 0 293.92000031-293.92000031c0-84.42666656-35.73333375-159.78666656-92.74666687-213.06666656 0.16000031-0.16000031 0.64000031-0.16000031 0.42666656-0.37333313A45.17333344 45.17333344 0 0 1 553.92000031 32C799.30666625 53.86666625 992 259.73333375 992 511.04A480.90666656 480.90666656 0 0 1 510.93333313 992z"
  }));
}
const ForwardRef = React.forwardRef(MoonIcon);
export default ForwardRef;