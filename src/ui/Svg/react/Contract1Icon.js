import * as React from "react";
function Contract1Icon({
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
    d: "M832.787 45.966H179.563c-41.555 0-75.343 31.302-75.343 69.905V908.13c0 38.603 33.75 69.905 75.343 69.905h653.224c41.593 0 75.342-31.302 75.342-69.905V115.87c0-38.603-33.749-69.905-75.342-69.905zM341.78 472.193h328.71c25.087 0 37.67 11.65 37.67 34.952s-12.544 34.953-37.67 34.953H341.78c-25.127 0-37.67-11.65-37.67-34.953 0-23.301 12.543-34.952 37.67-34.952zm0 209.715h77.478c25.127 0 37.671 11.651 37.671 34.953 0 23.301-12.544 34.952-37.67 34.952H341.78c-25.127 0-37.67-11.65-37.67-34.952s12.543-34.953 37.67-34.953zm0-425.256h328.71c25.087 0 37.67 11.651 37.67 34.953 0 23.302-12.544 34.952-37.67 34.952H341.78c-25.127 0-37.67-11.65-37.67-34.952s12.543-34.953 37.67-34.953zm297.407 372.206l21.865 41.05 48.895 6.602c10.408 1.398 17.593 10.33 16.078 20a17.243 17.243 0 01-5.554 10.098l-35.34 31.962 8.388 45.167c1.748 9.592-5.243 18.719-15.612 20.35a20.311 20.311 0 01-12.04-1.787l-43.729-21.36-43.73 21.36a19.806 19.806 0 01-25.67-7.379 16.544 16.544 0 01-1.942-11.223l8.389-45.167-35.341-31.962a16.738 16.738 0 01-.388-24.972 19.535 19.535 0 0110.874-5.126l48.933-6.602 21.865-41.089a19.729 19.729 0 0134.06.078z"
  }));
}
const ForwardRef = React.forwardRef(Contract1Icon);
export default ForwardRef;