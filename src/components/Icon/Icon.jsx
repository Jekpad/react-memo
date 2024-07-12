const Icon = ({ iconName, width = 20, height = 20 }) => {
  const iconPath = require(`../../assets/icons/${iconName}.svg`);

  return <img src={iconPath} alt={iconName} width={width} height={height} />;
};

export default Icon;
