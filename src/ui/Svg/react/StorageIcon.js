import * as React from "react";
function StorageIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1121 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M77.714 613.303h960a45.714 45.714 0 0145.715 45.714v287.269A45.714 45.714 0 011037.714 992h-960A45.714 45.714 0 0132 946.286V659.017a45.714 45.714 0 0145.714-45.714zM32 77.714V198.63a45.714 45.714 0 0045.714 45.714h960a45.714 45.714 0 0045.715-45.714V77.714A45.714 45.714 0 001037.714 32h-960A45.714 45.714 0 0032 77.714zM221.714 197.35c-33.645 0-60.937-26.515-60.937-59.2 0-32.64 27.292-59.155 60.937-59.155s60.937 26.515 60.937 59.155c0 32.685-27.291 59.2-60.937 59.2zm-144 336.137h960a45.714 45.714 0 0045.715-45.715V366.857a45.714 45.714 0 00-45.715-45.714h-960A45.714 45.714 0 0032 366.857v120.914a45.714 45.714 0 0045.714 45.715zm83.063-102.126c0-32.686 27.292-59.2 60.937-59.2s60.937 26.514 60.937 59.2c0 32.64-27.291 59.154-60.937 59.154S160.777 464 160.777 431.36z"
  }));
}
const ForwardRef = React.forwardRef(StorageIcon);
export default ForwardRef;