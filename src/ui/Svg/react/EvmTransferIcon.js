import * as React from "react";
function EvmTransferIcon({
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
    d: "M905.216 60.018c24.14 0 43.69 19.515 43.69 43.581v823.06c0 22.209-16.675 40.56-38.229 43.253l-5.461.328H118.784a43.69 43.69 0 01-43.327-38.12l-.364-5.461v-823.06c0-24.066 19.552-43.581 43.691-43.581h786.432zm0 426.057H118.784v440.584h786.432V486.11zM645.002 737.04v56.47H484.184v84.724l-116.8-119.64a12.67 12.67 0 019.102-21.554h268.516zm-114.87-197.7l116.8 119.64a12.67 12.67 0 01-9.14 21.553H369.278v-56.47h160.855v-84.723zM351 200.41H215.887v142.65H351v-33.315h-78.825V286.81h73.91V256.77h-73.91v-23.083H351v-33.314zm81.774 0h-64.808l58.182 142.65h73l58.145-142.65h-62.15l-30.657 102.891h-1.055L432.774 200.41zm206.803 0H574.55v142.65h49.116v-82.649h1.056l43.144 80.937h30.11l43.145-80.937h1.092v82.648h49.08V200.41h-65.027l-42.78 83.231h-1.092l-42.854-83.23z"
  }));
}
const ForwardRef = React.forwardRef(EvmTransferIcon);
export default ForwardRef;