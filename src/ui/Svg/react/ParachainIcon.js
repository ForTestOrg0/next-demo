import * as React from "react";
function ParachainIcon({
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
    d: "M692.333 821.767v1.638A126.448 126.448 0 00819.655 948.87a129.47 129.47 0 00129.252-130.49 126.484 126.484 0 00-127.468-125.464 122.115 122.115 0 00-83.34 30.729 26.76 26.76 0 00-9.102-10.923l-105.695-52.647c9.466-17.913 14.381-37.865 14.418-58.109a102.892 102.892 0 00-1.82-23.593l47.222-28.835c4.66-1.566 6.663-5.826 8.301-9.285l.728-1.602c14.054 16.676 34.589 26.579 56.434 27.234 40.232 0 72.818-32.513 72.818-72.6a72.709 72.709 0 00-72.818-72.598c-40.195 0-72.781 32.513-72.781 72.599.364 6.19 1.565 12.306 3.64 18.131a19.26 19.26 0 00-14.381 1.82l-41.87 25.378a129.252 129.252 0 00-92.843-61.713V364.398a127.285 127.285 0 00107.916-107.624 127.14 127.14 0 00-107.952-143.961 127.431 127.431 0 00-144.398 107.625 127.14 127.14 0 00107.952 143.96v112.504a129.252 129.252 0 00-92.842 61.604v-.11a1.784 1.784 0 00-1.82-1.71l-47.332-27.198a6.736 6.736 0 00-5.462-1.82c1.457-4.661 2.112-9.503 1.82-14.382a72.745 72.745 0 00-72.89-72.563c-40.268.036-72.818 32.586-72.818 72.708s32.66 72.636 72.891 72.6a70.852 70.852 0 0056.434-27.27l1.82 1.82 47.332 27.27c2.803 1.457 5.97 2.112 9.102 1.82a101.945 101.945 0 00-5.461 32.66c-.474 19.478 4.005 38.775 12.961 56.106a6.408 6.408 0 01-3.64 1.82l-109.446 54.431-5.461 5.462a125.21 125.21 0 00-76.532-25.377 127.285 127.285 0 00-127.43 127.103 127.285 127.285 0 00127.503 127.03c70.415 0 127.431-56.943 127.431-127.14a124.264 124.264 0 00-25.486-76.24l107.406-54.43c1.82 0 3.678-1.821 5.462-3.642a119.057 119.057 0 0076.458 41.761v58.073a74.128 74.128 0 00-54.795 70.815 73.073 73.073 0 00143.815 17.84 72.818 72.818 0 00-52.574-88.655v-58.073a126.667 126.667 0 0072.817-36.3l107.407 54.432a6.601 6.601 0 005.461 1.82 123.79 123.79 0 00-23.666 72.6z"
  }));
}
const ForwardRef = React.forwardRef(ParachainIcon);
export default ForwardRef;