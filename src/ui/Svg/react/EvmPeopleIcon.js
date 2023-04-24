import * as React from "react";
function EvmPeopleIcon({
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
    d: "M530.204 53.76c122.407 0 221.658 96.52 221.658 215.577s-99.25 215.577-221.658 215.577-221.657-96.483-221.657-215.577c0-119.057 99.25-215.577 221.657-215.577zm91.642 270.882a25.122 25.122 0 00-34.807-.728c-23.23 21.663-42.453 31.676-56.835 31.676s-33.605-10.013-56.797-31.676a25.122 25.122 0 00-34.844.728 23.484 23.484 0 00.728 33.86c31.494 29.419 61.531 44.965 90.913 44.965 29.419 0 59.42-15.583 90.95-45.001a23.484 23.484 0 00.728-33.86zM357.808 532.828h344.793c136.023 0 246.306 107.224 246.306 239.534v191.62H111.502v-191.62c0-132.31 110.283-239.57 246.306-239.57zm17.55 291.198h-79.99v-30.401h75.001v-39.831h-75.002v-30.51h79.99v-44.129H238.278v188.999H375.43v-44.128zm150.368 44.128l58.983-188.999h-63.06l-31.094 136.352h-1.092l-31.13-136.352h-65.718l58.983 188.999h74.092zm296.441-188.999h-66.009l-43.363 110.32h-1.092l-43.509-110.32h-66.01v188.999h49.881V758.672h1.056l43.763 107.261h30.584l43.763-107.26h1.093v109.481h49.843V679.155z"
  }));
}
const ForwardRef = React.forwardRef(EvmPeopleIcon);
export default ForwardRef;