import * as React from "react";
function RiotIcon({
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
    d: "M276.415 983.578c-74.69 0-135.254-59.073-135.254-131.94V600.104a130.53 130.53 0 010-28.044V187.592c0-72.908 60.564-131.98 135.254-131.98h272.122c187.076 0 339.273 148.509 339.273 331.07 0 173.571-138.9 318.684-316.282 330.366a343.415 343.415 0 01-22.991.745l-136.869.125v133.72c0 72.909-60.564 131.94-135.253 131.94zm111.434-871.711c20.712 28.873 28.707 63.919 22.41 98.592a130.862 130.862 0 01-55.633 85.211c-61.144 41.716-145.693 27.175-188.485-32.394a128.501 128.501 0 01-22.411-98.592 130.738 130.738 0 0155.634-85.212c61.143-41.715 145.692-27.175 188.485 32.395zm365.826 871.628A136.123 136.123 0 01642.82 927.28L451.685 661.082c-42.834-59.652-28.004-141.964 33.14-183.803 61.185-41.84 145.527-27.341 188.36 32.311L864.323 775.79c42.875 59.694 28.044 142.005-33.14 183.803-23.613 16.156-50.705 23.944-77.466 23.944z"
  }));
}
const ForwardRef = React.forwardRef(RiotIcon);
export default ForwardRef;