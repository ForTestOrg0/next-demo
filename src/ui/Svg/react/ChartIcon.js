import * as React from "react";
function ChartIcon({
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
    d: "M102.4 877.329067a44.544 44.544 0 0 1 44.032-44.305067h731.136c24.302933 0 44.032 19.729067 44.032 44.032v0.273067A44.544 44.544 0 0 1 877.568 921.6H146.432A44.032 44.032 0 0 1 102.4 877.568v-0.273067z m728.1664-110.6944h-112.0256a32.836267 32.836267 0 0 1-33.28-32.3584V352.768a32.768 32.768 0 0 1 33.28-32.3584h112.0256c18.397867 0 33.28 14.506667 33.28 32.3584v381.508267a32.836267 32.836267 0 0 1-33.28 32.3584z m-280.064 0h-112.0256a32.836267 32.836267 0 0 1-33.28-32.3584V134.7584c0-17.851733 14.882133-32.3584 33.28-32.3584h112.0256c18.363733 0 33.28 14.506667 33.28 32.3584v599.517867a32.836267 32.836267 0 0 1-33.28 32.3584z m-280.064 0H158.4128a32.836267 32.836267 0 0 1-33.28-32.3584v-272.520534a32.768 32.768 0 0 1 33.28-32.324266h112.0256c18.397867 0 33.28 14.472533 33.28 32.324266v272.520534a32.836267 32.836267 0 0 1-33.28 32.3584z"
  }));
}
const ForwardRef = React.forwardRef(ChartIcon);
export default ForwardRef;