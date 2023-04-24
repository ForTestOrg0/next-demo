import * as React from "react";
function ThumbUpIcon({
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
    d: "M512 32c265.12 0 480 214.88 480 480S777.024 992 512 992 32 777.024 32 512 246.88 32 512 32zm42.688 147.68c-31.328 0-32.608 19.072-33.28 29.44a16.288 16.288 0 01-.96 5.792c0 96.32-105.632 171.84-105.632 171.84v273.184c0 26.976 37.952 36.672 52.8 36.672h213.568c20.096 0 36.48-51.04 36.48-51.04 49.504-163.104 52.576-218.784 52.8-225.12v-.64c0-34.144-32.224-33.28-35.456-33.088h-142.4c55.104-196.96-37.92-207.04-37.92-207.04zm-197.92 207.168H271.36c-17.6 0-17.856 16.704-17.856 16.704l17.6 275.52c0 17.536 18.112 17.536 18.112 17.536h73.664c15.36 0 15.2-11.584 15.2-11.584v-277.28c0-19.776-18.848-20.864-21.344-20.896z"
  }));
}
const ForwardRef = React.forwardRef(ThumbUpIcon);
export default ForwardRef;