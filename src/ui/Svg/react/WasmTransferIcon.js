import * as React from "react";
function WasmTransferIcon({
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
    d: "M924.25401632 37.12905737a45.24739209 45.24739209 0 0 1 45.2473921 45.24739211v854.6729622a45.24739209 45.24739209 0 0 1-39.56633017 44.89546691l-5.68106193 0.35192517H109.8009587a45.24739209 45.24739209 0 0 1-44.89546692-39.56633164L64.55356661 937.04941166V82.37644948a45.24739209 45.24739209 0 0 1 45.24739209-45.24739211h814.45305762z m0 442.4189444H109.8009587V937.04941166h814.45305762v-457.50140989z m-269.47335634 260.57470405v58.67078507h-166.56067876V886.77453058l-120.96136152-124.22922776a13.17201808 13.17201808 0 0 1 9.45167794-22.422597h278.02008647zM535.78001878 534.85037036l120.96136152 124.22922921a13.17201808 13.17201808 0 0 1-9.45167794 22.42259555h-278.02008647V622.83141006h166.51040289V534.85037036z m74.45709644-350.51646405c-38.25918425 0-66.11146684 19.35582835-66.11146684 50.07378059 0 23.78001878 16.08796212 39.71715478 45.54904137 44.59381913l21.21599991 3.5695155c17.24428338 2.96621841 23.12644435 6.03298562 23.12644432 13.07146933 0 7.34013299-8.64727889 12.71954417-22.77452066 12.71954417-12.66926978 0-23.83029316-5.68106193-25.13744054-14.32834084h-44.64409354c0.15082465 30.31575269 25.84128788 47.35893705 68.87658624 47.35893707 42.73364759 0 70.234008-19.75802788 70.23400798-50.77762794 0-24.63469075-14.57971571-38.66138231-45.75014187-43.78942153l-22.02039749-3.56951551c-15.23328867-2.5137445-21.81929844-6.33463489-21.81929698-13.57421762 0-7.5915064 7.7926069-12.41789489 20.10995155-12.41789638 12.71954417 0 22.62369604 5.53023729 22.97561972 15.03218965h43.03529834c-0.20109903-29.46107924-24.13194244-47.96223561-66.86559151-47.96223562z m-422.30899283 2.61429327h-48.76663321l41.37622584 151.83013839h44.49326888l23.93084343-86.9252672h0.90494783l23.93084341 86.9252672h44.4932689l41.37622582-151.83013839H310.9004801l-18.45088199 95.9747471h-0.85467198l-23.93084341-96.02502149h-36.49956294l-23.93084344 96.02502149H206.3287285l-18.45088049-96.02502149z m291.09155576 0h-59.17353336l-52.3864246 151.83013839h48.06278441l8.34563106-30.16492805h48.96773225l8.34563109 30.16492805h50.27487959l-52.38642456-151.83013839z m273.84727241 0h-54.49796954v151.83013839h41.17512681V250.7972983h0.85467197l36.19791368 86.171144h25.23799079l36.19791367-86.171144h0.85467198v87.98103967h41.17512679V186.94819958h-54.54824392l-35.79571561 88.58433973h-0.90494784l-35.94653878-88.58433973z m-304.06247484 35.04159241l15.43438769 55.15154248h-31.82399909l15.48466355-55.15154248h0.90494785z"
  }));
}
const ForwardRef = React.forwardRef(WasmTransferIcon);
export default ForwardRef;