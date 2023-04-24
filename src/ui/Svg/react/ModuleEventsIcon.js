import * as React from "react";
function ModuleEventsIcon({
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
    d: "M352.7 136.533c11.195 0 20.48 8.192 22.391 18.944l.376 4.13-.034 23.109h273.066l.034-23.109c0-11.332 8.056-20.753 18.671-22.698l4.096-.376h45.5c11.162 0 20.48 8.192 22.391 18.944l.342 4.13v23.109h159.3c11.196 0 20.48 8.192 22.392 18.944l.375 4.13v692.702a23.006 23.006 0 01-18.67 22.733l-4.097.375H125.167a22.87 22.87 0 01-22.392-18.944l-.375-4.164V205.824c0-11.332 8.055-20.753 18.67-22.699l4.097-.375h159.232l.034-23.108c0-11.333 8.056-20.753 18.671-22.7l4.096-.409h45.5zm523.4 277.095H147.9v461.824h728.2V413.628zM352.7 667.58v92.399H216.166v-92.365H352.7zm227.567 0v92.399H443.733v-92.365h136.534zM352.7 482.918v92.331H216.166v-92.365H352.7zm227.567 0v92.331H443.733v-92.365h136.534zm227.567 0v92.331H671.3v-92.365h136.534z"
  }));
}
const ForwardRef = React.forwardRef(ModuleEventsIcon);
export default ForwardRef;