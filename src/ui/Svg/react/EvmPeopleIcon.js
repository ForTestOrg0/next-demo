import * as React from "react";
function EvmPeopleIcon({
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
    d: "M530.2044448 53.76c122.4066848 0 221.6573152 96.5199648 221.6573152 215.57703147 0 119.05706667-99.25063147 215.57703147-221.6573152 215.5770304s-221.6573152-96.4835552-221.65731627-215.5770304C308.54712853 150.2799648 407.79776 53.76 530.2044448 53.76z m91.64117333 270.88213334a25.12213333 25.12213333 0 0 0-34.80689813-0.72817814c-23.22887147 21.66328853-42.4527648 31.67573333-56.8342752 31.67573334s-33.6054048-10.0124448-56.79786667-31.67573334a25.12213333 25.12213333 0 0 0-34.84330666 0.72817814 23.48373333 23.48373333 0 0 0 0.72817706 33.86026666c31.49368853 29.41838187 61.53102187 44.96497813 90.91299627 44.96497814 29.41838187 0 59.41930667-15.5830048 90.94940373-45.00138667a23.48373333 23.48373333 0 0 0 0.72817814-33.86026667z m-264.03726293 208.18602666h344.79217813c136.02360853 0 246.30613333 107.22417813 246.30613334 239.53408V963.98222187H111.50222187v-191.61998187c0-132.30990187 110.2825248-239.57048853 246.30613333-239.57048853z m17.5490848 291.19829334H295.36711147v-30.40142187h75.0023104v-39.8313248H295.36711147v-30.51064853h79.99032853v-44.12757334H238.27797333v188.99854187h137.1522848v-44.12757333z m150.36871147 44.12757333l58.9824-188.99854187h-63.06019627l-31.0931904 136.35128854h-1.09226667l-31.1296-136.35128854h-65.7180448l58.9824 188.99854187h74.09208854z m296.44117333-188.99854187h-66.00931627l-43.36298666 110.31893334h-1.09226667l-43.50862187-110.31893334h-66.0093152v188.99854187h49.88017707v-109.48152853h1.05585813l43.7634848 107.26058666h30.58346667l43.76348373-107.26058666h1.09226667v109.48152853h49.8437696v-188.99854187z"
  }));
}
const ForwardRef = React.forwardRef(EvmPeopleIcon);
export default ForwardRef;