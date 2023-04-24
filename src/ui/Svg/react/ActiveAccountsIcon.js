import * as React from "react";
function ActiveAccountsIcon({
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
    d: "M512 636.276a124.276 124.276 0 100-248.552 124.276 124.276 0 000 248.552zM180.598 56.323a124.276 124.276 0 110 248.55 124.276 124.276 0 010-248.55zm0 56.96a67.316 67.316 0 100 134.631 67.316 67.316 0 000-134.632zM512 304.872a124.276 124.276 0 100-248.55 124.276 124.276 0 000 248.55zm-331.402 82.851a124.276 124.276 0 110 248.552 124.276 124.276 0 010-248.552zm0 56.96a67.316 67.316 0 100 134.632 67.316 67.316 0 000-134.632zm0 522.993a124.276 124.276 0 100-248.55 124.276 124.276 0 000 248.55zm331.402 0a124.276 124.276 0 100-248.55 124.276 124.276 0 000 248.55zm331.402-662.803a124.276 124.276 0 100-248.551 124.276 124.276 0 000 248.55zm0 82.85a124.276 124.276 0 110 248.552 124.276 124.276 0 010-248.552zm0 56.96a67.316 67.316 0 100 134.632 67.316 67.316 0 000-134.632zm0 522.993a124.276 124.276 0 100-248.55 124.276 124.276 0 000 248.55z"
  }));
}
const ForwardRef = React.forwardRef(ActiveAccountsIcon);
export default ForwardRef;