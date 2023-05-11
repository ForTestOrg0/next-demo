import * as React from "react";
function QrCodeIcon({
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
    d: "M512 75.09333333c241.28170667 0 436.90666667 195.62496 436.90666667 436.90666667s-195.62496 436.90666667-436.90666667 436.90666667S75.09333333 753.28170667 75.09333333 512 270.71829333 75.09333333 512 75.09333333z m218.45333333 480.59733334h-174.76266666V730.45333333l43.69066666-43.69066666v-87.38133334h87.38133334l43.69066666-43.69066666z m-262.144 0H293.54666667V730.45333333h174.76266666v-174.76266666z m-43.69066666 43.69066666v87.38133334h-87.38133334v-87.38133334h87.38133334zM468.30933333 293.54666667H293.54666667v174.76266666h174.76266666V293.54666667zM730.45333333 293.54666667h-174.76266666v174.76266666H730.45333333V293.54666667z m-305.83466666 43.69066666v87.38133334h-87.38133334v-87.38133334h87.38133334z m262.144 0v87.38133334h-87.38133334v-87.38133334h87.38133334z"
  }));
}
const ForwardRef = React.forwardRef(QrCodeIcon);
export default ForwardRef;