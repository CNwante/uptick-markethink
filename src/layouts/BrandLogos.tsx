import slack from "../assets/logos/slack.svg";
import amazon from "../assets/logos/amazon.svg";
import logitech from "../assets/logos/logitech.svg";
import google from "../assets/logos/google.svg";
import facebook from "../assets/logos/facebook.svg";

interface Brand {
  id: number;
  logo: string;
  description: string;
}

const brands: Brand[] = [
  { id: 1, logo: slack, description: "Slack logo" },
  { id: 2, logo: amazon, description: "Amazon logo" },
  { id: 3, logo: logitech, description: "Logitech logo" },
  { id: 4, logo: google, description: "Google logo" },
  { id: 5, logo: facebook, description: "Facebook logo" },
];

export const BrandLogos = () => {
  return (
    <section className="overflow-hidden w-full py-8 bg-green-0">
      <div className="mx-auto max-w-7xl">
        <div className="flex animate-marquee space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 w-max">
          {[...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.description}
              className="h-6 sm:h-8 md:h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
