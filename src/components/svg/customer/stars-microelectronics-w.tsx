import * as React from "react";
const StarsMicroelectronics = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={213}
    height={52}
    {...props}
  >
    <image
      xlinkHref="data:image/png;base64,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"
      width={213}
      height={52}
      data-name="stars microelectronics w"
      opacity={0.4}
    />
  </svg>
);
export default StarsMicroelectronics;
