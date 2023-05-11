import * as React from "react";
function Sub1Icon({
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
    d: "M512 32c265.08799969 0 480 214.91200031 480 480 0 265.08799969-214.91200031 480-480 480-265.08799969 0-480-214.91200031-480-480C32 246.91200031 246.91200031 32 512 32z m172.8 144c-29.952 0-55.32799969 22.59199969-64.00000031 53.82400031v-2.14400062h-179.19999938v568.64000062h179.19999938v-2.14400062c8.67199969 31.23199969 34.04800031 53.82400031 64.00000031 53.82400031 37.12000031 0 67.2-34.72000031 67.2-77.53600031s-30.07999969-77.53600031-67.2-77.53599938c-29.952 0-55.32799969 22.59199969-64.00000031 53.82399938v-2.14399969h-134.4v-206.75200031h134.4v-2.14399969c8.67199969 31.23199969 34.04800031 53.82400031 64.00000031 53.82400031 37.12000031 0 67.2-34.72000031 67.2-77.53600031s-30.07999969-77.53600031-67.2-77.53600031c-29.952 0-55.32799969 22.59199969-64.00000031 53.82400031v-2.14399969h-134.4V279.392h134.4v-2.14399969c8.67199969 31.23199969 34.04800031 53.82400031 64.00000031 53.82399938 37.12000031 0 67.2-34.72000031 67.2-77.53599938S721.92000031 176 684.8 176zM262.4 382.75200031c-74.23999969 0-134.4 69.43999969-134.4 155.10399938 0 85.632 60.16000031 155.07199969 134.4 155.07200062 74.23999969 0 134.4-69.43999969 134.4-155.07200062 0-85.66399969-60.16000031-155.10400031-134.4-155.10399938z"
  }));
}
const ForwardRef = React.forwardRef(Sub1Icon);
export default ForwardRef;