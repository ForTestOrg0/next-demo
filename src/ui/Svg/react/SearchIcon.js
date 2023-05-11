import * as React from "react";
function SearchIcon({
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
    d: "M765.74648163 714.32220547L969.61313143 917.96004927l-51.767486 51.65308216-203.86664981-203.63784379a400.98350647 400.98350647 0 0 1-257.12137732 92.72386008A402.29914311 402.29914311 0 0 1 54.38686857 456.57160954C54.38686857 234.40043393 234.57203886 54.38686857 456.8576183 54.38686857a402.29914311 402.29914311 0 0 1 402.41354695 402.12753987 400.35428786 400.35428786 0 0 1-93.52468362 257.80779703z m-308.88886333 71.27324459a329.13824438 329.13824438 0 0 0 329.25264653-329.08104162 329.13824438 329.13824438 0 0 0-329.25264653-329.0238422 329.13824438 329.13824438 0 0 0-329.30984931 329.0238422 329.13824438 329.13824438 0 0 0 329.30984931 329.08104162z"
  }));
}
const ForwardRef = React.forwardRef(SearchIcon);
export default ForwardRef;