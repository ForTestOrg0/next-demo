import * as React from "react";
function UsersIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    viewBox: "0 0 1280 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M659.36 581a250.92 250.92 0 0 0 108.24-206.28c0-106.2-66.36-197.4-160.38-234.9a249.24 249.24 0 0 0-96.18-18.72c-141.42 0-256.56 113.82-256.56 253.62a252 252 0 0 0 108.24 206.34C191.96 641.6 69.5 802.28 69.5 992h883.08a421.92 421.92 0 0 0-41.82-184.56c-49.2-104.88-140.1-186.78-251.4-226.38z m274.26-139.32a224.16 224.16 0 0 0 96.18-183.78C1029.8 133.04 927.62 32 801.2 32c-57.72 0-110.76 21.3-150.84 56.7 107.76 51.18 181.92 160.26 181.92 286.02a313.74 313.74 0 0 1-62.52 187.62 500.28 500.28 0 0 1 211.32 245.1h213.42c0-168.84-109.08-312.06-260.88-365.76z"
  }));
}
const ForwardRef = React.forwardRef(UsersIcon);
export default ForwardRef;