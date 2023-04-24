import * as React from "react";
function ChartIcon({
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
    d: "M102.4 877.33a44.544 44.544 0 0144.032-44.306h731.136c24.303 0 44.032 19.73 44.032 44.032v.273a44.544 44.544 0 01-44.032 44.271H146.432a44.032 44.032 0 01-44.032-44.032v-.273zm728.166-110.695H718.541a32.836 32.836 0 01-33.28-32.359V352.768a32.768 32.768 0 0133.28-32.358h112.025c18.398 0 33.28 14.506 33.28 32.358v381.508a32.836 32.836 0 01-33.28 32.359zm-280.064 0H438.477a32.836 32.836 0 01-33.28-32.359V134.758c0-17.851 14.882-32.358 33.28-32.358h112.025c18.364 0 33.28 14.507 33.28 32.358v599.518a32.836 32.836 0 01-33.28 32.359zm-280.064 0H158.413a32.836 32.836 0 01-33.28-32.359v-272.52a32.768 32.768 0 0133.28-32.325h112.025c18.398 0 33.28 14.473 33.28 32.325v272.52a32.836 32.836 0 01-33.28 32.359z"
  }));
}
const ForwardRef = React.forwardRef(ChartIcon);
export default ForwardRef;