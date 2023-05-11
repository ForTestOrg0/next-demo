import * as React from "react";
function SaltIcon({
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
    d: "M512 32c265.104 0 480 214.896 480 480s-214.896 480-480 480S32 777.104 32 512 246.896 32 512 32z m176.928 515.28v58.464h-34.128c-37.2 0-74.352-22.08-100.944-51.312-2.64 3.792-5.28 7.536-8.016 11.232-11.712 16.272-24.192 33.84-38.016 51.12 35.904 37.2 87.936 67.68 146.976 67.68h34.08V752l87.12-103.68-87.072-101.04z m0-275.28v67.2h-34.128c-97.68 0-161.376 76.944-210.048 144.864-43.68 61.056-81.504 118.656-142.416 118.656H248v78.72h54.288c97.68 0 152.832-81.792 201.504-149.76 43.68-61.056 89.904-113.76 150.96-113.76h34.128v58.8L776 373.28 688.928 272zM302.24 340.16H248v78.72s4.8-0.24 16.32-0.336h15.84l22.128 0.336c38.4 0.864 62.496 17.568 87.792 44.064l12.624-17.568c10.368-14.4 21.264-29.712 33.072-44.88-35.04-34.704-77.136-60.336-133.44-60.336z"
  }));
}
const ForwardRef = React.forwardRef(SaltIcon);
export default ForwardRef;