import React from "react";

interface OptionalProps<T> {
  items?: Array<T>;
  renderItem: (itemProps: {
    item: T;
    idx: number;
    key: string | number;
    arr: Array<T>;
  }) => React.ReactNode;
  className?: string;
}

const OptionalLayout = ({
  items,
  renderItem,
  className,
}: OptionalProps<any>) => {
  {
    return (
      <div className={`${className}`}>
        {items?.map((item, idx, arr) => {
          return (
            <React.Fragment key={item}>
              {renderItem({ item, idx, arr, key: item })}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
};

export default OptionalLayout;
