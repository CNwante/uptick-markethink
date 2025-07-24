import laptop1 from "../assets/images/laptop_1.png";
import laptop2 from "../assets/images/laptop_2.png";
import laptop3 from "../assets/images/laptop_3.png";
import { Button } from "../components/Button";

export const SocialMediaPromo = () => {
  return (
    <section className="w-[80%] mx-auto flex justify-between items-center flex-wrap gap-y-16 lg:gap-8 py-12">
      <div className="max-w-[550px]">
        <img
          src={laptop2}
          srcSet={`
            ${laptop1} 640w,
            ${laptop2} 1024w,
            ${laptop3} 1600w
          `}
          sizes="(max-width: 640px) 640px,
                 (max-width: 1024px) 1024px,
                 1600px"
          alt="Laptop with social media icons"
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-[550px]">
        <h2 className="l2_heading">Increase Business on Social Media Reach</h2>
        <p className="description">
          Using our network of industry influencers, we help promote your
          content
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
    </section>
  );
};
