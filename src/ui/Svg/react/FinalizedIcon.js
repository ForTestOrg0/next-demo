import * as React from "react";
function FinalizedIcon({
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
    d: "M513.28159289 49.38380288a22.25311289 22.25311289 0 0 1 19.96177977-1.90297088l3.76710713 1.94180779 372.98236643 234.95869554 2.21366045 1.98064355 2.097152 2.44667733 1.475774 2.33016889 1.2815929 2.87387535 1.20392021 4.69917354 0.23301689 3.02921956-0.31068957 3.88361557-0.62137799 2.64085731-1.51460978 3.8059429-1.51460978 2.4855131-1.98064355 2.44667734-1.28159289 1.28159289-1.7087909 1.39810133h-0.19417998l-1.28159289 1.00974023-360.74898091 227.11379399 0.03883691 352.47688136 326.68967823-196.12254891 0.8155591-235.58007467 0.38836111-3.96128711a22.25311289 22.25311289 0 0 1 43.76833934 0.15534535l0.34952533 4.00012288-0.89323178 248.16298667-0.34952534 3.84477867a22.29194866 22.29194866 0 0 1-7.340032 12.89360156l-3.10689223 2.25249621-371.11823132 222.76414578-3.49525333 1.7087909a22.29194866 22.29194866 0 0 1-29.86499755-16.93256135l-0.31068957-3.88361444-0.07767267-391.7790629-360.63247133-227.11379399a22.25311289 22.25311289 0 0 1-3.45641756-34.9913691l3.45641756-2.67969422 371.07939556-233.63826802z m11.88386133 45.12760491l-329.33053667 207.38503111 320.67007602 201.94796999L853.75810333 301.43040512l-328.55381334-206.91899733zM131.79411001 301.8964389v414.9642422c0 7.80606578 4.11663133 15.0684251 10.79644842 19.06854912l371.11823247 222.76414578a22.25311289 22.25311289 0 0 0 33.67094044-19.06854912V524.62174777a22.25311289 22.25311289 0 0 0-10.79644956-19.06854798L165.50388622 282.78905401a22.25311289 22.25311289 0 0 0-33.70977621 19.06854798zM801.48464867 526.52471979v115.80939378a11.1459749 11.1459749 0 0 1-5.670078 9.70903665l-133.47984157 75.497472a11.10713799 11.10713799 0 0 1-16.58303488-9.70903665v-106.87708047c0-3.84477867 1.94180779-7.37886777 5.16520733-9.39834709l133.47984156-84.42978646c7.37886777-4.66033778 17.08790557 0.62137799 17.08790556 9.39834824z"
  }));
}
const ForwardRef = React.forwardRef(FinalizedIcon);
export default ForwardRef;