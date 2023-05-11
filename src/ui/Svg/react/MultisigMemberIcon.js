import * as React from "react";
function MultisigMemberIcon({
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
    d: "M608.15587555 530.13890845c23.96190379 0 46.99173888 4.15546823 68.42929266 11.80618866l-139.34409956 139.38293646-3.9612871 4.66033778-1.55344555 2.13598776-2.87387535 4.5826651-1.28159288 2.40784157-2.52434888 5.9030949-28.15620779 84.19676843c-15.22377045 45.59363755 28.11737088 88.93477888 73.67217267 73.71100956l82.33263445-27.45715712 5.43706112-2.13598777 5.20404309-2.64085845 2.64085846-1.59228131 4.97102733-3.61176179 1.94180666-1.63111821 135.34397667-135.22746824c5.43706112 19.02971221 8.31093533 39.22451001 8.31093533 60.11835733V916.44207445H107.55792555v-171.69461134c0-118.52792377 93.40093667-214.60855467 208.55011555-214.60855466z m287.23215133-124.66403555l54.91431424 54.91431309a19.41807445 19.41807445 0 0 1 0 27.49599289l-302.37825024 302.37825024-1.94180666 1.63111823-2.64085845 1.59228131-2.71852998 1.16508445-82.33263446 27.45715712-3.02921956 0.73788643-2.99038379 0.27185379-2.95154688-0.23301688-2.25249621-0.38836224-1.8641351-0.66021376-3.33990912-1.66995513-2.83503845-2.13598777-2.05831622-2.21366044-1.98064356-2.99038379-1.16508444-2.52434887-0.89323179-3.49525334-0.23301689-3.30107335c0-1.94180779 0.34952533-3.96128711 1.00974023-5.98076643l28.15620779-84.19676957 1.28159288-2.40784043 1.55344555-2.1359889 303.23264512-303.31031665a19.41807445 19.41807445 0 0 1 27.45715599 0z m-13.70915954 41.16631665l-27.45715712 27.49599289 27.45715712 27.45715712 27.45715598-27.45715712zM462.13195889 100.88296335c103.69251555 0 187.73393977 86.48810155 187.73393978 193.17100088 0 106.68289934-84.04142421 193.13216512-187.73393978 193.13216398s-187.695104-86.44926578-187.695104-193.13216398S358.43944334 100.88296335 462.13195889 100.88296335z"
  }));
}
const ForwardRef = React.forwardRef(MultisigMemberIcon);
export default ForwardRef;