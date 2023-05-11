import * as React from "react";
function SuccessIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    "p-id": 1390,
    t: 1682662546187,
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M512 32C246.69125 32 32 246.69125 32 512s214.69125 480 480 480 480-214.69125 480-480S777.30875 32 512 32z m244.3640625 398.8359375L494.545625 692.654375c-5.236875 5.236875-12.2184375 8.728125-20.0728125 8.728125-9.6 1.7446875-19.2-0.87375-26.1815625-7.8553125L283.345625 527.70875a28.974375 28.974375 0 0 1 0-41.0175l13.963125-13.9640625c11.345625-11.345625 29.6728125-11.345625 41.0184375 0l132.654375 132.654375 229.528125-229.5271875c11.3446875-11.345625 29.671875-11.345625 41.0175 0l14.836875 13.9640625c11.3446875 11.345625 11.3446875 29.671875 0 41.0175z",
    "p-id": 1391
  }));
}
const ForwardRef = React.forwardRef(SuccessIcon);
export default ForwardRef;