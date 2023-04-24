import * as React from "react";
function BarChartIcon({
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
    d: "M121.92 871.584h839.36c15.936 0 28.96 12.704 28.96 28.224A28.672 28.672 0 01961.312 928H64V124.192C64 108.672 77.024 96 92.928 96c15.936 0 28.96 12.704 28.96 28.192v747.392zm405.216-42.304V172.16c0-18.336-14.496-33.856-31.84-33.856h-95.552c-17.344 0-31.808 15.52-31.808 33.856v657.12h159.2zm-202.624 0V369.6a32 32 0 00-31.84-32.416h-95.52c-17.376 0-31.84 15.488-31.84 32.416v459.712H324.48zm405.216-290.496V829.28h-159.2V538.784c0-18.336 14.464-33.824 31.84-33.824h95.52c17.376 0 31.84 15.488 31.84 33.824zM932.352 829.28V369.6a32 32 0 00-31.84-32.416h-95.52c-17.376 0-31.84 15.488-31.84 32.416v459.712h159.2z"
  }));
}
const ForwardRef = React.forwardRef(BarChartIcon);
export default ForwardRef;