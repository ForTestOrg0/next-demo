import * as React from "react";
function CandidatesIcon({
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
    d: "M512 56.323a151.906 151.906 0 0121.748 302.238v46.148a195.32 195.32 0 01162.636 258.659l64.043 36.992a151.906 151.906 0 11-29.08 33.348l-53.895-31.11A195.154 195.154 0 01512 794.105a194.947 194.947 0 01-152.86-73.737l-56.089 32.436a151.906 151.906 0 11-23.53-36.579l56.505-32.643a195.32 195.32 0 01154.267-278.916v-46.106A151.906 151.906 0 01512 56.323z"
  }));
}
const ForwardRef = React.forwardRef(CandidatesIcon);
export default ForwardRef;