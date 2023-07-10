import { FC } from "react";

interface ICMonitor {
  active?: boolean;
}
const CMonitor: FC<ICMonitor> = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32.814}
      height={32.814}
      data-name="vuesax/linear/monitor"
    >
      <g
        fill={"#3C97FF"}
        stroke={"#3C97FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M8.805 2.734h15.19c4.867 0 6.084 1.217 6.084 6.071v8.655c0 4.867-1.217 6.071-6.071 6.071H8.805c-4.854.012-6.071-1.204-6.071-6.058V8.805c0-4.854 1.217-6.071 6.071-6.071Z" />
        <path
          d="M16.407 23.544v6.535M2.734 17.774h27.345M10.254 30.079h12.305"
          data-name="Vector"
        />
      </g>
    </svg>
  );
};
export default CMonitor;
