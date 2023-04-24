import * as React from "react";
function TokenIcon({
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
    d: "M876.322 685.364v95.576c0 73.827-151.888 156.082-369.914 156.082-212.473 0-362.186-78.177-369.526-150.529l-.311-5.553v-95.537c63.264 66.526 205.016 112.935 369.837 112.935 164.898 0 306.689-46.409 369.914-112.935zm0-173.365v95.615c0 73.789-151.888 156.005-369.914 156.005-212.473 0-362.186-78.177-369.526-150.451l-.311-5.554v-95.615c63.264 66.527 205.016 112.897 369.837 112.897 164.898 0 306.689-46.37 369.914-112.897zm0-173.48v95.73c0 73.79-151.888 156.005-369.914 156.005-212.473 0-362.186-78.177-369.526-150.451l-.311-5.554v-95.73c63.264 66.526 205.016 112.974 369.837 112.974 164.898 0 306.689-46.37 369.914-112.975zM506.408 104.801c218.026 0 369.914 82.216 369.914 156.044 0 73.789-151.888 156.005-369.914 156.005-217.949 0-369.837-82.216-369.837-156.005s151.888-156.044 369.837-156.044z"
  }));
}
const ForwardRef = React.forwardRef(TokenIcon);
export default ForwardRef;