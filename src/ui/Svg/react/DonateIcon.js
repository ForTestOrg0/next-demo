import * as React from "react";
function DonateIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M20 0H0V20H20V0ZM13.4697 4C14.8761 4 16.0192 5.09243 16.0192 6.43658C16.0192 6.8389 15.9089 7.23608 15.7002 7.5989L15.6048 7.7522C14.7617 9.22632 12.7572 10.7004 11.902 11.2865L11.5892 11.496L11.5733 11.5027C11.4908 11.5531 11.4153 11.5749 11.3328 11.5749C11.2825 11.5749 11.229 11.5622 11.1766 11.5408L11.0993 11.5027C11.0694 11.4893 8.13714 9.64173 7.08362 7.7522C6.82024 7.36289 6.67802 6.91148 6.67802 6.43658C6.67802 5.09244 7.82108 4 9.22752 4C10.2284 4 10.9869 4.78199 11.3486 5.17802L11.5088 5.00599L11.6868 4.82856C12.1016 4.43426 12.7054 4 13.4697 4ZM6.38014 10.8751C7.83816 10.8751 8.47814 11.2125 9.21165 11.6482L9.3505 11.7309L9.39248 11.7595L9.7305 11.9648C9.91036 12.0703 10.1085 12.1797 10.334 12.2914C10.6678 12.4643 12.097 12.6002 12.9965 12.6438C13.0923 12.649 13.178 12.6595 13.256 12.6751L13.4163 12.7378L13.4169 12.8C13.401 12.9769 13.2242 13.4649 11.7432 13.3822C9.94017 13.2815 8.89275 12.8519 8.41701 12.6019C7.94127 12.3518 7.18769 13.018 7.94127 13.3923L8.11208 13.4719C9.10813 13.9139 12.1496 14.9561 13.4482 14.0987C14.7835 13.2177 14.8335 12.4945 14.4117 12.0414C14.3882 12.0174 14.3619 11.9982 14.3221 12.0155L14.571 11.8137L14.8387 11.5863C15.0541 11.4125 15.4153 11.1721 15.8569 11.1721C16.0368 11.1721 16.2247 11.2158 16.4046 11.3014C16.9443 11.5682 17.1502 12.1068 16.8843 12.5347L16.8362 12.6068L15.8113 13.7174L15.385 14.1894C14.7903 14.8547 14.5032 15.2088 14.3677 15.3959C14.2028 15.6266 13.7658 15.942 13.3308 15.9929L13.2124 16H9.12062C8.9797 16 8.83765 15.9755 8.70713 15.9327L8.58092 15.8842H8.57293L8.55494 15.8691L8.31821 15.7472L7.95876 15.569C7.42985 15.3114 6.74329 14.9969 6.39013 14.8992C6.13227 14.8354 4.93493 14.7918 3.96747 14.7918C3.47374 14.7918 3.06274 14.4763 3.00655 14.0739L3 13.9796V12.0901C3 11.6756 3.37573 11.3305 3.85512 11.2834L3.96747 11.2779C4.29529 11.2779 4.586 11.2188 4.87749 11.147L5.09684 11.0916L5.13882 11.0765C5.55859 10.9691 5.94438 10.8751 6.38014 10.8751Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DonateIcon);
export default ForwardRef;