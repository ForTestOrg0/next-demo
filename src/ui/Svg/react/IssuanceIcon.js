import * as React from "react";
function IssuanceIcon({
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
    d: "M666.296 489.32h91.148l184.317-158.724a481.643 481.643 0 00-27.38-54.642L670.102 486.019l-3.845 3.3zM534.486 45.966v74.566l75.032-64.78a500.87 500.87 0 00-75.032-9.786zM920.323 489.32l53.167-45.633a453.917 453.917 0 00-14.952-65.167L829.447 489.514l90.876-.194M768.124 122.085L534.486 322.674v78.488L816.36 158.513a457.635 457.635 0 00-48.235-36.428M664.277 70.783L534.525 182.514v78.41L724.822 96.92a482.5 482.5 0 00-60.507-26.214m224.201 165.714c-11.65-15.807-24.194-30.914-37.67-45.167L534.524 463.028v26.292h60.274l293.717-252.901M490.446 45.966C232.962 58.238 34.238 276.576 46.51 533.671a465.645 465.645 0 0098.333 264.63l345.37-296.903V45.966h.233zm29.981 487.472L173.621 831.583a465.18 465.18 0 00338.767 146.45c250.26 0 453.995-197.21 465.646-444.595H520.427"
  }));
}
const ForwardRef = React.forwardRef(IssuanceIcon);
export default ForwardRef;