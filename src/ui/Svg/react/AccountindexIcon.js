import * as React from "react";
function AccountindexIcon({
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
    d: "M512 32c265.104 0 480 214.896 480 480S777.104 992 512 992 32 777.104 32 512 246.896 32 512 32zm232.608 192h-420.96c-30.432 0-55.344 23.136-55.344 51.408v72h-33.216c-6.24 0-11.088 4.512-11.088 10.32v61.632c0 5.76 4.848 10.32 11.04 10.32h33.264v41.136h-33.216c-6.24 0-11.088 4.512-11.088 10.272v61.728c0 5.76 4.848 10.272 11.04 10.272h33.264v41.136h-33.216c-6.24 0-11.088 4.512-11.088 10.32v61.68c0 5.76 4.848 10.32 11.04 10.32h33.264v72c0 28.272 24.96 51.408 55.392 51.408h420.96c30.528-.096 55.248-23.04 55.344-51.408V275.36c0-28.224-24.96-51.36-55.392-51.36zm-221.52 324v72h-144v-72h144zm116.304-144v72H368v-72h271.392z"
  }));
}
const ForwardRef = React.forwardRef(AccountindexIcon);
export default ForwardRef;