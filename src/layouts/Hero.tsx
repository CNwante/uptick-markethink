import { Header } from "./Header";
import hero_bg from "../assets/images/hero.svg";
import cube_1 from "../assets/images/cube_1.svg";
import cube_2 from "../assets/images/cube_2.svg";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section
      className="relative bg-green-10 w-full -mt-5 bg-no-repeat bg-center bg-cover text-gray-300"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      <div className="text-center w-[100%] mx-auto mt-5 lg:pt-10 py-10 lg:py-60">
        <Header />
        <span className="relative block before:content-['──'] after:content-['──'] lg:before:content-['───'] lg:after:content-['───'] before:text-gray-300 after:text-gray-300 before:mx-5 after:mx-5 lg:before:mx-20 lg:after:mx-20 text-2xl lg:text-4xl my-6 md:my-8 lg:my-16 font-bold">
          The Best
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Digital Marketing
        </h1>
        <p className="lg:text-2xl max-w-[300px] md:max-w-[500px]  lg:max-w-[700px] mx-auto my-6 md:my-8 lg:my-16 md:leading-[1.75]">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer
        </p>
        <Button variant="primary" className="lg:py-5 lg:px-[50px] lg:text-2xl">
          Get Started
        </Button>
      </div>
      <img
        src={cube_1}
        alt="3D cube shape at the bottom-left of hero section"
        className="absolute left-0 bottom-0 w-[70px] md:w-[200px] lg:w-[250px] xl:w-[350px]"
      />
      <img
        src={cube_2}
        alt="3D cube shape at the bottom-right of hero section"
        className="absolute right-0 bottom-0 w-[40px] md:w-[80px] lg:w-[120px] xl:w-[150px]"
      />
    </section>
  );
};
