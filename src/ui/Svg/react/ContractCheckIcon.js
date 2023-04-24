import * as React from "react";
function ContractCheckIcon({
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
    d: "M831.583 63.469c11.961 0 21.942 8.466 24 19.612l.389 4.272V627.06c71.575 28.35 122.062 97.09 122.062 177.287 0 105.596-87.42 191.19-195.307 191.19a196.51 196.51 0 01-152.393-71.652l-482.268-.039a24.273 24.273 0 01-24.04-19.612L123.64 900V87.314a24.078 24.078 0 0120.039-23.495l4.388-.35h683.517zm-24.428 47.768h-634.7v764.8h429.257a187.23 187.23 0 01-14.215-71.69c0-105.596 87.42-191.191 195.269-191.191 8.31 0 16.466.505 24.466 1.476l-.077-503.356zM841.447 736.5l-73.983 72.43-41.438-40.545-29.593 28.972 69.05 67.575L869.06 763.568 841.447 736.5zm-351.622-75.536v71.692H245.7v-71.692h244.124zM733.91 517.541v71.692H245.7V517.54h488.21zm0-286.766V445.85H245.7V230.775h488.21z"
  }));
}
const ForwardRef = React.forwardRef(ContractCheckIcon);
export default ForwardRef;