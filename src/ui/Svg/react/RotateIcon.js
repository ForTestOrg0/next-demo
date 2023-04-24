import * as React from "react";
function RotateIcon({
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
    d: "M946.88 453.8a53.4 53.4 0 0144.46 44.52h.12l.06 2.1c.06 1.98.48 3.84.48 5.82l-.18 1.92.18 3.84a480 480 0 01-465 479.76l-15 .24a473.1 473.1 0 01-294.18-102.78l-54.6 54.24a40.08 40.08 0 01-24.48 19.02l-2.1 2.16-.06-1.68-4.32.96-4.26.6a41.1 41.1 0 01-41.1-41.1v-192c0-22.68 18.36-41.1 41.1-41.1h155.58l1.08-1.02 1.02 1.02H320c20.64 0 37.74 15.18 40.68 35.04l.42 6.06a39 39 0 01-13.98 29.52L293.6 814.1a369.6 369.6 0 00201.6 71.28l16.8.36a373.68 373.68 0 00373.68-372.72c-.24-2.22-.6-4.38-.6-6.72l.12-1.44.18-1.44a56.16 56.16 0 01-.24-5.1h.78a53.4 53.4 0 0160.96-44.46zM512 32c111.6 0 213.66 38.7 295.02 102.72l50.82-49.38a41.22 41.22 0 0179.26 15.24v192a41.1 41.1 0 01-41.1 41.1H704a41.1 41.1 0 01-31.2-67.62l-.3-.36 57.66-56.16A371.04 371.04 0 00512 138.32a373.44 373.44 0 00-373.02 360h-.18l.12 1.14a53.46 53.46 0 11-106.02-9.84c-.36-1.68-.9-3.3-.9-5.04 0-5.04 1.2-9.72 2.88-14.16C56.06 224.96 261.08 32 512 32z"
  }));
}
const ForwardRef = React.forwardRef(RotateIcon);
export default ForwardRef;