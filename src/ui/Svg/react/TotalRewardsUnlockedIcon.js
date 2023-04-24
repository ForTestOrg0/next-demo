import * as React from "react";
function TotalRewardsUnlockedIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1057 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M404.295 138.923C198.593 138.923 32 305.825 32 511.96c0 206.105 166.593 373.038 372.295 373.038S776.59 718.096 776.59 511.961c0-206.105-166.593-373.038-372.295-373.038zm0 536.256a46.727 46.727 0 01-46.54-46.634V441.98H299.57a35.207 35.207 0 01-34.898-34.991c0-19.106 15.823-34.96 34.898-34.96h209.417c19.075 0 34.93 15.854 34.93 34.99 0 19.106-15.855 34.992-34.93 34.992h-58.152v186.503c0 25.64-20.933 46.634-46.541 46.634zm523.529-547.93l81.438 36.849a23.286 23.286 0 010 42.422l-81.438 36.849-36.756 82.057a23.286 23.286 0 01-42.36 0l-36.756-81.593-81.903-36.849a23.286 23.286 0 010-42.422l81.439-36.848 36.755-82.058a23.286 23.286 0 0142.36 0l37.221 81.593zm0 652.84l81.438 36.848a23.286 23.286 0 010 42.423l-81.438 36.848-36.756 82.058a23.286 23.286 0 01-42.36 0l-36.756-81.593-81.903-36.849a23.317 23.317 0 010-42.422l81.439-36.849 36.755-82.058a23.317 23.317 0 0142.36 0l37.221 81.594z"
  }));
}
const ForwardRef = React.forwardRef(TotalRewardsUnlockedIcon);
export default ForwardRef;