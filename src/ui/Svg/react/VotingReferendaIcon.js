import * as React from "react";
function VotingReferendaIcon({
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
    d: "M582.127484 103.820387l2.873806 2.411355 204.337549 204.899097a20.744258 20.744258 0 0 1 2.378322 26.425806l-2.378322 2.840774-192.379871 192.908387h150.362838c9.94271 0 19.422968 4.029935 26.32671 10.999742l3.270194 3.732646 156.837161 206.980129c6.110968 8.059871 8.324129 17.242839 7.46529 25.963354l0.132129 2.642581v82.778839c0 18.993548-14.203871 34.683871-32.503742 36.996129l-4.657548 0.264258H119.841032c-18.927484 0-34.584774-14.203871-36.864-32.569807l-0.29729-4.69058v-82.778839c0-0.891871 0.033032-1.783742 0.099097-2.642581-0.660645-6.969806 0.627613-14.269935 4.294193-21.008516l3.204129-4.954838 156.870194-206.980129c6.011871-7.927742 14.897548-13.080774 24.642064-14.369033l4.921807-0.330322 91.961806-0.066065-104.778322-105.04258a20.744258 20.744258 0 0 1-2.378323-26.425807l2.378323-2.873806 291.906064-292.698839a20.612129 20.612129 0 0 1 26.32671-2.411355z m322.064516 762.58271v-51.596387H119.841032v51.596387h784.350968z m-156.870194-295.803871l-187.524129-0.066065-61.935483 62.100645 162.782967 0.033033c4.657548 0 9.182968 1.618581 12.783484 4.492387l2.543484 2.378322 37.16129 41.38942a20.744258 20.744258 0 0 1-11.891613 34.254451l-3.468387 0.297291H326.259613a20.711226 20.711226 0 0 1-17.474065-31.777033l2.114065-2.774709 37.16129-41.38942a20.612129 20.612129 0 0 1 11.891613-6.573419l3.435355-0.29729h104.348903l-61.935484-62.100645H276.711226l-133.285161 175.797677h737.114838l-133.219097-175.764645z"
  }));
}
const ForwardRef = React.forwardRef(VotingReferendaIcon);
export default ForwardRef;