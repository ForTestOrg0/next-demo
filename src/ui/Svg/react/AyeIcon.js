import * as React from "react";
function AyeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 14 15",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.1837 6.10762H13.0329L13.0329 6.10763C13.0329 6.10763 14.0001 6.02986 14 7.00344C14 7.00344 14 8.40538 12.5693 13.1176C12.5693 13.1176 12.1261 14.5 11.5818 14.5H5.79853C5.3954 14.5 4.36774 14.237 4.36774 13.5066V6.10762C4.36774 6.10762 7.22906 4.06311 7.22906 1.45403C7.24565 1.426 7.24948 1.36916 7.25436 1.29656C7.27324 1.01602 7.30797 0.5 8.15612 0.5C8.15612 0.5 10.6753 0.772486 9.1837 6.10762ZM0.483325 6.11002H2.78814C2.78814 6.11002 3.37394 6.10283 3.37394 6.67598V14.1858C3.37394 14.1858 3.3777 14.5 2.96214 14.5H0.967236C0.967236 14.5 0.475999 14.5 0.475999 14.0251L0 6.56288C0 6.56288 0.00730824 6.11002 0.483325 6.11002Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(AyeIcon);
export default ForwardRef;