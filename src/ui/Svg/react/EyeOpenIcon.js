import * as React from "react";
function EyeOpenIcon({
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
    d: "M512 32c265.08799969 0 480 214.91200031 480 480 0 265.08799969-214.91200031 480-480 480-265.08799969 0-480-214.91200031-480-480C32 246.91200031 246.91200031 32 512 32z m0 288c-161.02399969 0-295.90399969 81.91999969-331.36000031 192C216.128 622.08000031 351.008 704 512 704c160.96000031 0 295.872-81.91999969 331.36000031-192C807.90399969 401.91999969 673.02399969 320 512 320z m0 48a144 144 0 1 1 0 288 144 144 0 0 1 0-288z"
  }));
}
const ForwardRef = React.forwardRef(EyeOpenIcon);
export default ForwardRef;