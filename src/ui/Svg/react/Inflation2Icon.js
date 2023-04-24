import * as React from "react";
function Inflation2Icon({
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
    d: "M76.889 677.112c59.274 62.368 192.166 105.877 346.722 105.877 124.081 0 234.182-28.035 303.468-71.361v71.361h40.778c-20.025 64.48-155.794 130.053-344.246 130.053-199.23 0-339.55-73.291-346.467-141.121l-.255-5.207v-89.566zm0-162.53c59.274 62.37 192.166 105.841 346.722 105.841 62.477 0 121.423-7.1 173.379-19.66v52.21l129.98-.11v19.152c-57.017 43.727-166.243 78.425-303.36 78.425-199.229 0-339.549-73.255-346.466-141.012l-.255-5.207v-89.638zm563.464 95.028v-86.653l130.016-.037V392.904h86.726l-.036 129.98 130.052.036v86.69H857.06v130.053h-86.654l-.036-130.09-129.98.037zM76.889 351.944c59.274 62.369 192.166 105.914 346.722 105.914 124.081 0 234.182-28.035 303.468-71.362l-.073 93.025-129.98.073v87.745c-49.843 12.816-108.498 20.608-173.415 20.608-199.23 0-339.55-73.291-346.467-141.048l-.255-5.207v-89.748zM423.61 132.836c204.4 0 346.794 77.077 346.794 146.29 0 69.177-142.395 146.255-346.794 146.255-204.327 0-346.722-77.078-346.722-146.255 0-69.176 142.359-146.29 346.722-146.29z"
  }));
}
const ForwardRef = React.forwardRef(Inflation2Icon);
export default ForwardRef;