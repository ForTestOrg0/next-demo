import * as React from "react";
function MediumIcon({
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
    d: "M857.46 136.518H166.586a30.022 30.022 0 00-30.022 30.022v690.874c0 16.617 13.405 30.022 30.022 30.022H857.46a30.022 30.022 0 0030.022-30.022V166.54a30.022 30.022 0 00-30.022-30.022zm-105.192 193.07l-38.26 36.725a11.124 11.124 0 00-4.33 10.705v270.057a10.938 10.938 0 004.33 10.705l37.561 36.678v8.192H563.06v-7.82l38.773-37.608c3.863-3.863 3.863-4.98 3.863-10.706v-218.53L497.711 701.672h-14.523l-125.58-273.688v183.483a24.995 24.995 0 007.03 21.038l50.5 61.114v8.192H271.733v-8.192l50.502-61.114a24.483 24.483 0 006.517-21.038V399.36a18.2 18.2 0 00-6.051-15.686l-44.87-54.086v-8.145h139.357L524.8 557.52l94.673-235.892h132.841v7.96z"
  }));
}
const ForwardRef = React.forwardRef(MediumIcon);
export default ForwardRef;