import * as React from "react";
const ProPlugin = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={165}
    height={28}
    {...props}
  >
    <defs>
      <pattern
        id="a"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 939 159"
      >
        <image
          xlinkHref="data:image/png;base64,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"
          width={939}
          height={159}
        />
      </pattern>
    </defs>
    <path
      fill="url(#a)"
      d="M0 0h165v28H0z"
      data-name="proplugin w"
      opacity={0.4}
    />
  </svg>
);
export default ProPlugin;
