import * as React from "react";
function QualifiedRewardAdressesIcon({
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
    d: "M610.45338688 48.71577687a70.29835313 70.29835313 0 0 0-80.15356125-7.58339062c-8.31933187 4.70362219-15.67874062 11.03911313-21.66225938 18.68649937L300.14231563 327.63737h92.15259656l172.59413531-221.74218656 55.4195475 46.39627312-138.93283875 175.34591344h92.72855062l102.00780563-128.75765625 123.70206281 103.57567969-21.47027531 25.18197656h21.59826469c21.47027531-0.03199781 42.81256031 3.19974281 63.35491031 9.66322406a75.48193594 75.48193594 0 0 0 7.03943437-49.27604156 74.17004156 74.17004156 0 0 0-25.02198937-42.62057625L610.45338688 48.71577687zM151.99421656 364.53040719c0-9.79121344 3.80769375-19.19845781 10.55915157-26.07790594 6.71946-6.94344187 15.9027225-10.81513125 25.43795625-10.81513125H228.14809906L285.42349719 253.81930062H187.9593275c-28.63769906 0-56.12349187 11.64706406-76.3458675 32.41339594A112.18298813 112.18298813 0 0 0 80 364.53040719v442.90841906c0 48.95606719 18.97447594 95.89629656 52.73176406 130.51751531A177.77771813 177.77771813 0 0 0 259.98554094 992H799.94216469a142.19657719 142.19657719 0 0 0 101.81582062-43.22852719A149.55598594 149.55598594 0 0 0 943.93059781 844.36386031v-295.27228031a149.55598594 149.55598594 0 0 0-42.1726125-104.4076125 142.19657719 142.19657719 0 0 0-101.81582062-43.22852719H187.99132437c-9.53523375 0-18.71849625-3.90368625-25.46995312-10.81513125a37.40499469 37.40499469 0 0 1-10.52715469-26.10990187z m539.95662375 332.19731343h71.99421657c9.53523375 0 18.68649844 3.87168937 25.46995312 10.81513032 6.71946 6.911445 10.52715469 16.31868937 10.52715469 26.07790593 0 9.79121344-3.80769375 19.19845781-10.55915156 26.10990188a35.51714719 35.51714719 0 0 1-25.43795625 10.81513125h-71.99421657a35.51714719 35.51714719 0 0 1-25.46995406-10.81513125 37.37299781 37.37299781 0 0 1-10.52715469-26.10990188c0-9.79121344 3.80769375-19.16646 10.55915157-26.07790593 6.71946-6.94344187 15.9027225-10.81513125 25.43795718-10.81513032z"
  }));
}
const ForwardRef = React.forwardRef(QualifiedRewardAdressesIcon);
export default ForwardRef;