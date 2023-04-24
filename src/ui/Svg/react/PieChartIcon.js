import * as React from "react";
function PieChartIcon({
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
    d: "M647.578 492.083h80.179l161.945-139.52a423.731 423.731 0 00-24.064-48.025L650.906 489.165zM531.763 102.4v65.536l65.946-56.934a440.32 440.32 0 00-65.946-8.602zm339.149 389.683l46.694-40.14a399.206 399.206 0 00-13.158-57.242L791.04 492.237zM737.126 169.267L531.814 345.55v69.017L779.52 201.267a408.371 408.371 0 00-42.394-32zm-91.29-45.107l-114.073 98.253v68.915L699.033 147.2a424.346 424.346 0 00-53.196-23.04zm197.07 145.613a430.32 430.32 0 00-33.127-39.68L531.763 468.94v23.142h52.992l258.15-222.31M493.057 102.4C266.752 113.152 92.109 305.1 102.912 531.046a409.242 409.242 0 0086.426 232.602L492.85 502.682V102.4zm26.368 428.442L214.528 792.883A408.832 408.832 0 00512.41 921.6c219.904 0 398.95-173.312 409.19-390.758z"
  }));
}
const ForwardRef = React.forwardRef(PieChartIcon);
export default ForwardRef;