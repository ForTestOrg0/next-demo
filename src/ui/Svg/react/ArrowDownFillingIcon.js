import * as React from "react";
function ArrowDownFillingIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 4879,
    t: 1683774665834,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M480.14222187 753.20888853L111.50222187 384.56888853c-18.2044448-18.2044448-18.2044448-45.51111147 0-63.7155552 9.10222187-9.10222187 20.48-13.65333333 31.85777813-13.65333333h735.0044448c25.03111147 0 45.51111147 20.48 45.5111104 45.51111147 0 11.37777813-4.55111147 22.7555552-13.65333333 31.85777706L543.85777813 753.20888853c-18.2044448 18.2044448-45.51111147 18.2044448-63.71555626 0z",
    "p-id": 4880
  }));
}
const ForwardRef = React.forwardRef(ArrowDownFillingIcon);
export default ForwardRef;