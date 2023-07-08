const ColoredLine = ({
  color,
  className,
}: {
  color: string;
  className?: string;
}) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      width: 20,
      border: 0,
    }}
    className={`${className}`}
  />
);

export default ColoredLine;
