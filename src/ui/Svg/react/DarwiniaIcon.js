import * as React from "react";
function DarwiniaIcon({
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
    d: "M817.835 75.093a131.072 131.072 0 01131.072 131.072v611.67a131.072 131.072 0 01-131.072 131.072h-611.67A131.072 131.072 0 0175.093 817.835v-611.67A131.072 131.072 0 01206.165 75.093h611.67zM312.479 352.201a37.574 37.574 0 00-17.476 70.816l4.66 2.039v194.787h-74.128V425.056a37.574 37.574 0 10-30.292-2.04l4.66 2.04v194.787l-25.34.037a12.816 12.816 0 00-2.185 25.267l2.913.364 140.538-.036c85.379-.874 156.922-36.008 190.31-93.971a43.873 43.873 0 0049.697-43.4c0-12.925-5.607-24.503-14.527-32.55 11.505-19.041 28.071-35.28 48.606-47.95l9.03-5.206v137.625a37.574 37.574 0 1030.292 2.04l-4.66-2.076V410.893a240.954 240.954 0 0160.802-13.363l13.326-.91v194.533a37.574 37.574 0 1030.292 2.039l-4.66-2.04V396.366h74.128v194.788a37.574 37.574 0 1030.292 2.039l-4.624-2.04V396.366l25.305-.036a12.816 12.816 0 002.184-25.268l-2.913-.364-140.538.037c-85.379.91-156.922 36.008-190.31 93.97a43.8 43.8 0 00-35.17 75.913c-11.505 19.079-28.071 35.317-48.606 47.987l-9.03 5.207V456.185a37.574 37.574 0 10-30.292-2.039l4.66 2.076v149.13a241.136 241.136 0 01-60.802 13.326l-13.326.91V425.056a37.574 37.574 0 00-12.816-72.818z"
  }));
}
const ForwardRef = React.forwardRef(DarwiniaIcon);
export default ForwardRef;