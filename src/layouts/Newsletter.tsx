import mewsletterBg from "../assets/images/newsletter_bg.svg";
import markethinkLogo from "../assets/logos/markethink.svg";
import cube_2 from "../assets/images/cube_2.svg";
import cube_4 from "../assets/images/cube_4.svg";
import cube_3 from "../assets/images/cube_3.svg";
import { Button } from "../components/Button";
import type { FormEvent } from "react";

export const Newsletter = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="relative max-w-[80%] py-32 px-16 my-16 mx-auto bg-no-repeat bg-center bg-cover bg-green-10 grid place-content-center"
      style={{ backgroundImage: `url(${mewsletterBg})` }}
    >
      <div className="max-w-[620px] text-center lg:text-left">
        <div className="text-[30px] md:text-[32px] text-white font-bold">
          <h2>
            Subscribe to get information, latest news and other interesting
            offers about
          </h2>
          <div className="w-[250px] mx-auto lg:mx-0 my-8 flex justify-between px-2 lg:px-0">
            <img src={markethinkLogo} alt="Markethink logo" className="w-10" />
            <span>markethink</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[530px] flex justify-center lg:justify-between gap-7 flex-wrap lg:flex-nowrap"
        >
          <input
            type="text"
            className="w-full max-w-[372px] py-3 rounded-full bg-white px-5 focus:outline-lime-500"
          />
          <Button
            variant="primary"
            className="w-full max-w-[372px] lg:w-[200px]"
          >
            Subscribe
          </Button>
        </form>
      </div>

      <img
        src={cube_2}
        alt="3D cube image at bottom right of the container"
        className="absolute bottom-0 right-0 w-13 lg:none"
      />
      <img
        src={cube_3}
        alt="3D cube image at top left of the container"
        className="absolute top-0 left-0 w-13 lg:w-30"
      />
      <img
        src={cube_4}
        alt="3D cube image at bottom right of the container"
        className="hidden lg:block absolute -bottom-4.5 -right-17.5 w-[260px] xl:w-[360px] xl:-right-24 xl:-bottom-6"
      />
    </section>
  );
};
