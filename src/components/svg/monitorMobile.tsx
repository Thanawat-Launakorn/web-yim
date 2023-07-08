import { FC } from "react";

interface IMonitorMobbile {
  active?: boolean;
}

const MonitorMobbile: FC<IMonitorMobbile> = ({ active }) => {
  const colorActive = active ? "#3C97FF" : "#FFFFFF";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={34.805} height={34.805}>
      <g
        fill={colorActive}
        stroke={colorActive}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        data-name="vuesax/linear/monitor-mobbile"
      >
        <path d="M14.5 24.581H9c-4.882 0-6.1-1.218-6.1-6.105v-8.7c0-4.889 1.218-6.107 6.105-6.107h15.271c4.887 0 6.105 1.218 6.105 6.105" />
        <path
          d="M14.502 31.136v-6.555M2.9 18.78h11.6M9.774 31.136h4.728M31.905 18.563v8.281c0 3.437-.856 4.293-4.293 4.293h-5.148c-3.437-.001-4.293-.857-4.293-4.294v-8.28c0-3.437.856-4.293 4.293-4.293h5.148c3.437 0 4.293.856 4.293 4.293ZM25.009 26.466h.013"
          data-name="Vector"
        />
      </g>
    </svg>
  );
};

export default MonitorMobbile;
