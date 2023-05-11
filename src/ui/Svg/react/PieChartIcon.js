import * as React from "react";
function PieChartIcon({
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
    d: "M647.5776 492.0832h80.1792l161.9456-139.52a423.7312 423.7312 0 0 0-24.064-48.0256l-214.7328 184.6272zM531.7632 102.4v65.536l65.9456-56.9344A440.32 440.32 0 0 0 531.7632 102.4z m339.1488 389.6832l46.6944-40.1408a399.2064 399.2064 0 0 0-13.1584-57.2416L791.04 492.2368z m-133.7856-322.816l-205.312 176.2816v69.0176l247.7056-213.2992a408.3712 408.3712 0 0 0-42.3936-32z m-91.2896-45.1072l-114.0736 98.2528V291.328l167.2704-144.128a424.3456 424.3456 0 0 0-53.1968-23.04z m197.0688 145.6128c-10.24-13.8752-21.2992-27.136-33.1264-39.68l-278.016 238.848v23.1424h52.992l258.1504-222.3104M493.056 102.4c-226.304 10.752-400.9472 202.7008-390.144 428.6464a409.2416 409.2416 0 0 0 86.4256 232.6016l303.5136-260.9664V102.4z m26.368 428.4416L214.528 792.8832A408.832 408.832 0 0 0 512.4096 921.6c219.904 0 398.9504-173.312 409.1904-390.7584z"
  }));
}
const ForwardRef = React.forwardRef(PieChartIcon);
export default ForwardRef;