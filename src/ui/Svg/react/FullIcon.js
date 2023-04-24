import * as React from "react";
function FullIcon({
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
    d: "M512 74.667c265.088 0 480 214.912 480 480 0 16.224-.8 32.256-2.368 48.064H34.368A486.816 486.816 0 0132 554.667c0-265.088 214.912-480 480-480zM791.776 274.89a48 48 0 00-63.36-3.968l-4.544 3.968-203.648 203.648a48 48 0 0063.36 71.872l4.544-3.968 203.648-203.648a48 48 0 000-67.904zM136.96 957.77V857.515h101.984v-62.4H136.96v-54.336H249.6v-66.112H56V957.77h80.96zm222.272-283.104h-80.96v182.24c0 64.544 48.704 105.76 121.44 105.76 72.768 0 121.44-41.216 121.44-105.76v-182.24h-80.96V847.69c0 29.824-14.304 46.112-40.48 46.112-26.144 0-40.48-16.288-40.48-46.08V674.667zm389.184 216.96H640.32v-216.96h-80.96V957.77h189.056v-66.144zm219.584 0H859.904v-216.96h-80.96V957.77H968v-66.144z"
  }));
}
const ForwardRef = React.forwardRef(FullIcon);
export default ForwardRef;