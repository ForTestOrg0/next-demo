import * as React from "react";
function ThumbDownIcon({
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
    d: "M992 512c0-265.12-214.88-480-480-480S32 246.976 32 512s214.976 480 480 480 480-214.88 480-480zM734.752 637.248H592.64c55.04 196.992-37.952 207.04-37.952 207.04-31.328 0-32.608-19.04-33.28-29.408a16.32 16.32 0 00-.96-5.792c0-96.32-105.632-171.84-105.632-171.84V364.064c0-26.976 37.952-36.672 52.8-36.672h213.568c20.096 0 36.48 51.04 36.48 51.04 52.8 173.984 52.8 225.76 52.8 225.76 0 35.936-35.712 33.056-35.712 33.056zm-378.24-.096H271.36c-17.6 0-17.856-16.704-17.856-16.704l17.6-275.52c0-17.536 18.112-17.536 18.112-17.536h73.664c15.36 0 15.2 11.584 15.2 11.584v277.312c0 21.12-21.632 20.864-21.632 20.864z"
  }));
}
const ForwardRef = React.forwardRef(ThumbDownIcon);
export default ForwardRef;