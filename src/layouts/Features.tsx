import { features } from "../data/features";
import { FeatureCard } from "../components/FeatureCard";
import { Button } from "../components/Button";

export const Features = () => {
  return (
    <section className="w-[80%] mx-auto lg:py-18 lg:flex lg:justify-between py-14">
      <div className="max-w-2xl mx-auto mb-12 lg:max-w-[500px] lg:mx-0">
        <h2 className="l2_heading">
          We’re Strategic Digital Marketing Agency
        </h2>
        <p className="description">
          We created a full-stack structure for our working workflow processes,
          were from the funny the century initial all made, have spare to
          negatives.
        </p>

        <Button variant="plain">See More</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconDescription={feature.iconDescription}
          />
        ))}
      </div>
    </section>
  );
};
