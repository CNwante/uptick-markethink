interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  iconDescription: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconDescription,
}) => {
  return (
    <div className="max-w-[300px]">
      <img src={icon} alt={iconDescription} className="text-3xl" />
      <h2 className="l3_heading">{title}</h2>
      <p className="text-sm text-gray-1 max-w-[180px]">{description}</p>
    </div>
  );
};
