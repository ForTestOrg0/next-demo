import * as React from "react";
function MediumBlockIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 2278,
    t: 1684316861596,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M24.380952 999.619048V24.380952h975.238096v975.238096H24.380952zM782.384762 305.39581l52.224-50.078477v-10.873904h-181.101714l-129.072762 321.974857-146.773334-322.169905H187.684571v11.068952L248.832 329.142857a24.868571 24.868571 0 0 1 8.289524 21.308953v289.54819a33.304381 33.304381 0 0 1-8.972191 28.769524l-68.754285 83.334095v11.117714h195.486476v-11.117714l-68.803048-83.382857a34.425905 34.425905 0 0 1-9.606095-28.769524V389.705143l171.349333 373.51619H487.619048l147.163428-373.51619v297.984c0 7.850667 0 9.362286-5.217524 14.628571l-52.906666 51.346286v10.678857h256.877714v-11.117714l-51.2-50.078476a14.969905 14.969905 0 0 1-5.851429-14.57981V319.975619a15.36 15.36 0 0 1 5.851429-14.579809z",
    "p-id": 2279
  }));
}
const ForwardRef = React.forwardRef(MediumBlockIcon);
export default ForwardRef;