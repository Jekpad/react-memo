import sprite from "./sprites.svg";

const Icon = ({ iconName, width = 20, height = 20, color }) => {
  return (
    <svg width={width} height={height} style={{ color: color }}>
      <use href={`${sprite}#${iconName}`} xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
