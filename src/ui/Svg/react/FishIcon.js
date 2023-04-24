import * as React from "react";
function FishIcon({
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
    d: "M512 62c248.535 0 450 201.465 450 450S760.535 962 512 962 62 760.535 62 512 263.465 62 512 62zm-19.35 211.77h-10.53c-23.625 0-45.405 7.335-62.91 19.71l-26.415 27.225a94.32 94.32 0 00-12.6 28.665 280.8 280.8 0 00-49.5 14.94l-38.925 20.07c-42.48 27.09-73.08 66.465-87.3 115.155-1.08 1.215-4.005 3.69-6.525 5.535a8.55 8.55 0 00-3.6 6.975c0 2.7 1.44 5.31 3.78 6.885 2.565 1.71 5.4 3.96 6.525 5.13 20.385 63 76.41 129.33 175.5 150.3 10.755 43.425 52.335 75.87 101.97 75.87h10.53v-72.045c94.23-12.285 169.515-62.235 191.97-126.45h10.98l27.54 48.6a29.25 29.25 0 0025.065 13.905c15.66 0 28.485-12.06 28.485-26.775V436.4c0-14.715-12.825-26.73-28.485-26.73a28.8 28.8 0 00-25.065 14.265l-27.54 48.15h-10.98c-22.455-64.125-97.65-114.12-191.925-126.36v-72z"
  }));
}
const ForwardRef = React.forwardRef(FishIcon);
export default ForwardRef;