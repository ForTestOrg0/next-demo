import * as React from "react";
function ArrowRightBoldIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 4909,
    t: 1684312213534,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M778.67488355 473.16385185l-466.03377778-414.25224651c-20.71261275-18.12353539-54.37060741-18.12353539-72.4941428 5.17815228-18.12353539 20.71261275-18.12353539 54.37060741 5.17815348 72.49414402L667.34459259 512 245.32511645 887.41609836c-20.71261275 18.12353539-23.30168889 51.78153127-5.17815348 72.49414402 10.35630577 10.35630577 23.30168889 18.12353539 38.83614814 18.1235354 12.94538311 0 23.30168889-5.17815349 33.65799466-12.94538312l466.03377778-414.25224651c10.35630577-10.35630577 18.12353539-23.30168889 18.12353661-38.83614815s-5.17815349-28.47984238-18.12353661-38.83614815z",
    "p-id": 4910
  }));
}
const ForwardRef = React.forwardRef(ArrowRightBoldIcon);
export default ForwardRef;