import * as React from "react";
function DolphinIcon({
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
    d: "M512 62c248.535 0 450 201.465 450 450s-201.465 450-450 450S62 760.535 62 512 263.465 62 512 62z m111.06 185.31l-1.08 0.045a25.875 25.875 0 0 0-3.87 0.585c-11.25 2.385-129.825 29.25-170.325 105.48l-4.86-0.585a365.04 365.04 0 0 0-40.23-2.34c-65.655 0-116.1 20.43-150.12 60.75-48.42 57.33-46.98 137.565-44.1 169.83l-30.915 30.96a26.64 26.64 0 0 0-6.3 10.125c-6.93 20.07-1.845 34.56 3.6 43.2 12.645 19.935 36.45 23.49 41.04 23.985a26.685 26.685 0 0 0 21.42-7.38c22.545-21.87 43.65-26.46 57.375-26.46 2.25 0 18.54-5.67 39.87-13.05 34.92-12.15 83.295-28.89 105.705-33.345 21.51 30.6 52.695 61.65 93.105 67.635 0.675 0.135 1.35 0.135 1.98 0.135l3.285-0.405a13.32 13.32 0 0 0 9.945-14.04l-4.41-50.76a205.56 205.56 0 0 1 102.555 67.635l-26.415 60.075a26.64 26.64 0 0 0 41.49 31.095c18.81-15.795 45.765-23.805 80.01-23.805 30.69 0 55.53 6.75 55.8 6.795a26.775 26.775 0 0 0 30.15-12.33 26.64 26.64 0 0 0-4.365-32.31l-69.435-68.31c-22.32-125.82-67.86-202.455-153.45-245.655 3.51-30.78 14.13-79.38 39.6-99.72a26.55 26.55 0 0 0-14.67-47.835h-2.385z"
  }));
}
const ForwardRef = React.forwardRef(DolphinIcon);
export default ForwardRef;