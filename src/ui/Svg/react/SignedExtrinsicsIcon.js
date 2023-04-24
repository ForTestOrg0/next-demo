import * as React from "react";
function SignedExtrinsicsIcon({
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
    d: "M702.054 136.533a21.845 21.845 0 0121.504 17.886l.342 3.926v343.552l132.71-132.335a21.914 21.914 0 0127.887-2.526l3.004 2.526 61.815 61.679a21.777 21.777 0 012.56 27.818l-2.56 3.038-225.382 224.905v212.787a21.845 21.845 0 01-17.954 21.47l-3.926.341H90.112a21.845 21.845 0 01-21.504-17.886l-.341-3.925v-741.41a21.845 21.845 0 0117.92-21.47l3.925-.376h611.942zm-21.845 43.623H111.991v697.822H680.21V730.624l-72.84 72.704a16.35 16.35 0 01-4.78 3.277l-2.798 1.024-83.866 22.016c-14.37 3.754-29.423-9.967-28.228-24.303l.58-3.311 22.05-83.695a16.896 16.896 0 012.458-5.325l1.843-2.218 94.652-94.482H177.493v-65.433h437.112v60.075l65.57-65.434V180.156zM396.083 681.71v65.434H177.527V681.71h218.556zM614.64 289.178v196.266H177.527V289.178H614.64zm257.434 126.634l-21.846 21.846 30.89 30.822 21.846-21.845-30.89-30.823z"
  }));
}
const ForwardRef = React.forwardRef(SignedExtrinsicsIcon);
export default ForwardRef;