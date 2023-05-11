import * as React from "react";
function Erc20Icon({
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
    d: "M512.1024 770.218667v57.514666l-0.273067 4.164267-0.341333 2.389333C503.057067 876.8512 414.5152 921.6 290.133333 921.6c-126.6688 0-216.1664-46.421333-221.627733-89.7024L68.266667 827.733333v-57.514666c37.956267 40.004267 122.9824 67.925333 221.9008 67.925333 65.297067 0 124.552533-12.151467 168.174933-31.914667l8.874667-4.232533 10.308266-5.495467 8.021334-4.846933 7.7824-5.256533 6.3488-4.8128c2.4576-1.979733 4.778667-3.959467 6.9632-5.973334l5.461333-5.393066zM594.090667 102.4C793.7024 102.4 955.733333 268.526933 955.733333 473.224533c0 204.6976-162.030933 370.824533-361.642666 370.824534-17.92 0-35.498667-1.3312-52.701867-3.8912l0.853333-6.178134 0.3072-6.2464V484.6592c-41.403733-62.737067-125.5424-94.378667-252.381866-94.890667-16.725333-0.068267-33.109333 0.785067-49.015467 2.286934C277.265067 226.372267 421.649067 102.4 594.090667 102.4z m-81.988267 563.541333v57.514667c0 2.8672-0.375467 5.768533-1.1264 8.669867l-1.706667 5.085866-2.389333 5.051734-2.321067 3.822933-4.096 5.563733-3.754666 4.3008-4.437334 4.334934-4.7104 4.096-7.338666 5.632-4.539734 3.072-5.9392 3.720533-11.025066 6.075733-13.073067 6.144-10.990933 4.437334-14.301867 5.051733c-35.601067 11.4688-79.9744 18.773333-130.184533 18.773333-126.6688 0-216.1664-46.421333-221.627734-89.668266L68.266667 723.456V665.941333c37.956267 40.004267 122.9824 67.925333 221.9008 67.925334 21.4016 0 42.154667-1.3312 61.952-3.754667l18.261333-2.6624c18.602667-3.072 36.181333-7.168 52.4288-12.1856l16.1792-5.461333 9.352533-3.584 9.898667-4.1984 10.001067-4.846934 9.454933-5.051733 3.822933-2.2528 7.9872-5.12 7.0656-5.0176 3.310934-2.594133 6.7584-5.802667 5.461333-5.393067z m0-104.3456v57.582934c0 3.242667-0.477867 6.519467-1.4336 9.8304a42.3936 42.3936 0 0 1-1.9456 5.256533l-1.536 3.106133-1.911467 3.310934c-2.56 4.096-5.8368 8.192-9.796266 12.219733-1.979733 2.048-4.1984 4.096-6.587734 6.144l-6.382933 5.0176-8.669867 5.9392-5.2224 3.208533-8.977066 4.949334-8.533334 4.164266-17.8176 7.406934-12.868266 4.471466-13.755734 4.096-7.406933 1.979734-14.506667 3.345066-16.042666 3.037867-12.0832 1.8432-14.404267 1.774933-24.507733 1.979734c-8.977067 0.477867-18.158933 0.750933-27.5456 0.750933-126.6688 0-216.1664-46.421333-221.627734-89.668267L68.266667 619.178667v-57.582934c37.956267 40.004267 122.9824 67.925333 221.9008 67.925334 94.446933 0 176.2304-25.3952 216.4736-62.5664l5.461333-5.358934z m312.6272-140.629333c-52.9408 0-87.005867 41.642667-87.005867 113.322667 0 71.236267 33.655467 114.244267 87.005867 114.244266 53.316267 0 86.8352-43.3152 86.8352-114.346666 0-71.68-33.928533-113.220267-86.8352-113.220267z m-187.665067 0.170667c-46.2848 0-77.175467 26.5216-80.315733 66.7648l-0.238933 8.021333h52.770133v-1.365333c0-15.633067 10.683733-26.692267 25.736533-26.692267 14.916267 0 23.517867 9.1136 23.517867 20.753067 0 11.946667-6.007467 22.254933-19.285333 35.2256l-79.325867 76.5952v42.120533h156.740267v-47.786667h-81.92v-1.194666l49.220266-47.581867 6.7584-7.031467c10.8544-11.946667 23.620267-30.1056 23.620267-52.292266 0-39.1168-29.422933-65.536-77.277867-65.536z m-334.7456 187.392l-12.151466 0.170666c-6.280533 0-12.458667-0.136533-18.568534-0.341333l-14.677333-0.750933C144.213333 600.064 68.266667 555.349333 68.266667 514.8672c0-36.113067 60.177067-75.537067 152.849066-89.019733l14.472534-1.8432 14.848-1.467734 17.271466-1.058133 9.6256-0.341333c4.232533-0.1024 8.533333-0.170667 12.834134-0.170667 130.798933 0 221.934933 49.493333 221.934933 93.866667 0 43.008-85.504 90.794667-209.783467 93.730133z m522.410667-138.888534c16.145067 0 27.7504 20.1728 27.7504 64.648534 0 44.373333-11.605333 65.536-27.7504 65.536-16.145067 0-27.921067-21.162667-27.921067-65.536 0-44.475733 11.776-64.648533 27.921067-64.648534zM724.514133 238.933333c-32.699733 0-56.081067 27.886933-56.081066 68.164267 0 40.482133 23.381333 68.369067 56.081066 68.369067 27.818667 0 49.322667-19.387733 53.930667-50.619734h-20.411733c-3.7888 18.466133-16.5888 29.184-33.518934 29.184-22.4256 0-35.84-18.670933-35.84-46.933333s13.4144-46.762667 35.84-46.762667c16.930133 0 29.696 10.752 33.518934 29.218134h20.3776C773.8368 258.321067 752.3328 238.933333 724.514133 238.933333z m-177.937066 2.7648h-78.848v131.1744h78.848v-20.6848h-59.733334v-35.498666h57.0368v-20.650667h-57.002666v-33.655467h59.733333v-20.6848z m70.9632 0h-49.288534v131.1744h19.114667V321.194667h25.736533l22.766934 51.712h22.4256l-25.736534-54.510934c14.848-5.5296 21.947733-19.5584 21.947734-36.932266 0-22.903467-12.151467-39.7312-36.9664-39.7312z m0.170666 20.6848c11.844267 0 17.544533 7.7824 17.544534 19.0464 0 11.264-5.700267 19.012267-17.544534 19.012267h-30.378666V262.382933h30.378666z"
  }));
}
const ForwardRef = React.forwardRef(Erc20Icon);
export default ForwardRef;