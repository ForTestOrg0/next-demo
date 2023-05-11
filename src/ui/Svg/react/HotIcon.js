import * as React from "react";
function HotIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: "icon",
    viewBox: "0 0 1075 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M914.96387318 573.80709262c0-46.16841292-25.84934021-148.26087917-81.89766921-251.40968865-0.99420539 34.48649955-29.7018861 118.06189037-50.76661286 140.30723603-14.16742685-38.96042382-17.70928355-298.88299615-369.40944119-386.31093285 21.43755378 258.49340208-242.64825363 254.76513185-242.64825362 533.7018823 0 148.19874133 91.15620693 275.70558293 221.70780255 332.31315247-29.82616178-171.00332752 143.53840355-193.00012183 115.57637688-369.16088983 182.56096522 106.50425268 225.56034845 231.15275378 176.160768 373.07557357a374.56688165 374.56688165 0 0 0 231.27702945-372.51633304z"
  }));
}
const ForwardRef = React.forwardRef(HotIcon);
export default ForwardRef;