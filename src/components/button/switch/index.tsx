import React, { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import moonC from "@/assets/images/png/moonC.png";
import sunC from "@/assets/images/png/sunC.png";
interface ISwitchTheme {}

export const ToggleSwitch: FC<{ props: ISwitchTheme }> = ({ props }) => {
  const [isSelected, setSelected] = React.useState<boolean>(false);
  return (
    <div
      className={classNames(
        `flex w-[80px] h-10 relative cursor-pointer ${
          isSelected ? "bg-[#3C97FF]" : "bg-[#224266]"
        }  rounded-full transition-all ease-linear duration-[.3] shadow-lg scale-[.6]`,
        {
          "": isSelected,
        }
      )}
    >
      <div
        className="absolute z-20 top-0 left-0"
        onClick={() => setSelected(true)}
      >
        <Image
          src={moonC}
          alt={"image-switch-theme"}
          className={`scale-[.6] ${isSelected && "opacity-50"}`}
        />
      </div>
      <span
        className={classNames(
          `h-[40px] w-10 bg-[#3C97FF] absolute z-0 rounded-full transition-all ease-linear duration-[.3] shadow-lg`,
          {
            "ml-10 bg-[white]": isSelected,
          }
        )}
      />
      <div
        className="absolute z-20 top-0 right-0"
        onClick={() => setSelected(false)}
      >
        <Image
          src={sunC}
          alt={"image-switch-theme"}
          className={`scale-[.6] ${!isSelected && "saturate-0"}`}
        />
      </div>
    </div>
  );
};
