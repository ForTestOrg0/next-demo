import * as React from "react";
function InputDataIcon({
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
    d: "M512 32c265.104 0 480 214.896 480 480s-214.896 480-480 480S32 777.104 32 512 246.896 32 512 32zM425.12 360.32L272 625.28 287.36 752l117.12-50.16 153.12-264.96L425.12 360.32zM752 704H464v48h288v-48zM476.192 272l-38.256 66.288 132.576 76.56 38.304-66.24L476.192 272z"
  }));
}
const ForwardRef = React.forwardRef(InputDataIcon);
export default ForwardRef;