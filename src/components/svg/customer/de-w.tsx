import * as React from "react";
const DeW = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={75}
    height={34}
    {...props}
  >
    <defs>
      <pattern
        id="a"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 346 158"
      >
        <image
          xlinkHref="data:image/png;base64,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"
          width={346}
          height={158}
        />
      </pattern>
    </defs>
    <path fill="url(#a)" d="M0 0h75v34H0z" data-name="de w" />
  </svg>
);
export default DeW;
