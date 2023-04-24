import * as React from "react";
function DetailIcon({
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
    d: "M222.153 239.043h513.605v119.104H222.153V239.043zm0 204.367h309.379v119.152H222.153V443.457zm0 203.755h205.593v119.151H222.153V647.165zm637.894 153.747l91.532 92.663a33.936 33.936 0 01-.472 48.17 34.407 34.407 0 01-48.452-.472l-89.694-90.825a179.481 179.481 0 01-104.776 33.7c-99.167 0-179.858-80.172-179.858-178.727 0-98.507 80.691-178.68 179.858-178.68 99.215 0 179.906 80.126 179.906 178.68 0 33.841-9.757 66.928-28.091 95.49zm-263.19-95.444a111.092 111.092 0 00111.376 110.62 111.092 111.092 0 00111.327-110.62 111.092 111.092 0 00-111.375-110.667 111.092 111.092 0 00-111.327 110.667zm-95.019 258.759H42.295V45.139h919.087v459.544H859.246V147.276H144.43V862.09h357.407v102.137z"
  }));
}
const ForwardRef = React.forwardRef(DetailIcon);
export default ForwardRef;