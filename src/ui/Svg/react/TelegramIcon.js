import * as React from "react";
function TelegramIcon({
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
    d: "M439.132 840.916c36.372-36.702 72.743-73.322 109.694-110.357h.083c3.604 2.569 7.084 5.261 10.522 8.078l.829.663c67.937 51.947 135.957 103.895 203.936 155.593 40.597 31.028 75.518 17.689 86.04-33.554 37.987-184.177 75.767-368.477 113.505-552.695l19.346-94.243c1.408-7.042 2.9-14.002 4.391-21.002 4.308-20.34 8.7-40.721 10.688-61.268 4.225-43.497-25.601-65.245-64.416-49.71a348996.955 348996.955 0 00-319.14 127.258C517.426 248.494 420.2 287.309 322.976 326l-51.906 20.67c-62.966 25.022-125.932 50.001-188.65 75.56a129.04 129.04 0 00-38.153 24.524c-12.096 11.227-10.232 26.43 3.314 35.75a114.593 114.593 0 0028.874 13.67c64.913 21.417 130.489 42.503 195.734 63.05 8.409 2.734 12.303 6.793 15.078 15.534 15.494 49.835 31.152 99.628 46.811 149.38l36.786 117.357c3.894 12.138 10.77 17.689 23.156 18.352 18.352.952 32.478-6.214 45.112-18.932zm-42.42-45.029a8.326 8.326 0 00-1.242.331v-.082a29351.46 29351.46 0 01-26.678-84.59l-15.741-49.877-5.883-19.097c-8.492-27.506-16.984-54.888-26.222-82.146-3.314-9.942-1.864-14.623 6.877-20.215 89.934-58.617 180.075-117.234 270.175-175.768l189.313-123.157.083-.041c7.167-4.681 14.706-9.61 22.784-11.848 4.018-1.036 8.45-.124 12.842.829 2.237.414 4.474.87 6.67 1.118-.953 1.74-1.782 3.687-2.61 5.593a32.602 32.602 0 01-6.38 10.811 62086.138 62086.138 0 01-208.12 194.12c-62.47 58.409-125.353 117.108-188.195 175.145a37.448 37.448 0 00-12.345 26.098c-3.728 46.148-7.953 92.627-12.22 138.774l-.746 7.871c-.083.829-.29 1.657-.497 2.568-.248 1.036-.497 2.072-.621 3.232a7.95 7.95 0 01-1.243.331z"
  }));
}
const ForwardRef = React.forwardRef(TelegramIcon);
export default ForwardRef;