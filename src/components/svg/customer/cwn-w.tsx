import * as React from "react";
const CwnW = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={184}
    height={30}
    {...props}
  >
    <defs>
      <pattern
        id="a"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 845 138"
      >
        <image
          xlinkHref="data:image/png;base64,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"
          width={845}
          height={138}
        />
      </pattern>
    </defs>
    <path fill="url(#a)" d="M0 0h184v30H0z" data-name="cwn w" />
  </svg>
);
export default CwnW;