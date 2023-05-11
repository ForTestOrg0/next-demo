import * as React from "react";
function CandidatesIcon({
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
    d: "M512 56.32252799a151.90629854 151.90629854 0 0 1 21.74824297 302.23843935v46.14770111a195.31993483 195.31993483 0 0 1 162.63543254 258.65910257l64.04339697 36.99272606a151.90629854 151.90629854 0 1 1-29.08050773 33.34730547l-53.89421773-31.11034334A195.15423312 195.15423312 0 0 1 512 794.10578015a194.94710781 194.94710781 0 0 1-152.85907911-73.73689954l-56.08975383 32.43595093a151.90629854 151.90629854 0 1 1-23.52952844-36.57847422l56.50400689-32.64307624a195.31993483 195.31993483 0 0 1 154.26753635-278.91603866v-46.10627508A151.90629854 151.90629854 0 0 1 512 56.32252799z"
  }));
}
const ForwardRef = React.forwardRef(CandidatesIcon);
export default ForwardRef;