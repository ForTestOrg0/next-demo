import * as React from "react";
function MailIcon({
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
    d: "M108.22 162.475h807.56c34.37 0 62.254 29.826 62.254 66.72v565.61c0 36.855-27.885 66.72-62.255 66.72H108.221c-34.37 0-62.255-29.826-62.255-66.72v-565.61c0-36.855 27.885-66.72 62.255-66.72zm420.324 411.003l278.378-172.2a25.865 25.865 0 008.544-34.098c-6.447-11.923-20.622-16.078-31.846-9.126L513.126 525.36 242.632 358.054c-11.223-6.991-25.398-2.797-31.845 9.126-6.486 12.04-2.602 27.185 8.544 34.098l278.377 172.2a22.33 22.33 0 0015.418 5.903 22.33 22.33 0 0015.418-5.903z"
  }));
}
const ForwardRef = React.forwardRef(MailIcon);
export default ForwardRef;