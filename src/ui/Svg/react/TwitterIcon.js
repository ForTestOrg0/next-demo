import * as React from "react";
function TwitterIcon({
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
    d: "M994.48 206.697a394.575 394.575 0 01-113.713 31.07A198.634 198.634 0 00967.76 128.32a398.842 398.842 0 01-125.601 48.053 198.013 198.013 0 00-337.367 180.448A561.146 561.146 0 0196.671 149.986c-17.647 30.24-26.927 64.624-26.844 99.587 0 68.641 34.88 129.246 88.112 164.748a196.77 196.77 0 01-89.645-24.856v2.569a197.888 197.888 0 00158.783 194.118 197.06 197.06 0 01-89.395 3.439 198.303 198.303 0 00184.88 137.614A397.06 397.06 0 0129.52 809.02a559.862 559.862 0 00303.44 89.064c364.21 0 563.383-301.74 563.383-563.383 0-8.45-.331-17.15-.663-25.642a405.636 405.636 0 0098.8-102.32z"
  }));
}
const ForwardRef = React.forwardRef(TwitterIcon);
export default ForwardRef;