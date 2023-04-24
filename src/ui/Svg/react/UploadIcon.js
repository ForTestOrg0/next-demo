import * as React from "react";
function UploadIcon({
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
    d: "M143.872 408.474a40.851 40.851 0 0127.546 10.615 42.374 42.374 0 0112.356 19.968l1.229 6.042.341 358.127h653.244l.068-352.666a42.444 42.444 0 0110.445-27.955c6.485-7.373 15.496-12.459 25.634-13.79 12.936 0 23.893 3.686 31.983 10.206 6.485 5.188 11.025 12.083 13.312 19.968l1.229 6.11.341 400.247c0 10.752-3.96 20.548-10.479 27.99a41.235 41.235 0 01-19.66 12.526l-5.94 1.263-741.649.342a40.96 40.96 0 01-27.546-10.616 42.189 42.189 0 01-12.356-19.968l-1.229-6.041-.341-400.248c0-11.64 4.642-22.187 12.151-29.798 7.51-7.612 17.886-12.322 29.355-12.322zm363.452 252.689c26.521 0 48.333-17.784 51.336-40.721l.342-5.36V346.454h155.067l-206.745-209.92-206.78 209.92h155.068v268.63c0 25.429 23.142 46.08 51.712 46.08z"
  }));
}
const ForwardRef = React.forwardRef(UploadIcon);
export default ForwardRef;