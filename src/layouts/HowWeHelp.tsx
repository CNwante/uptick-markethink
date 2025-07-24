import { useState } from "react";
import { helpSteps } from "../data/help_steps";
import greenPyramid from "../assets/icons/green_pyramid_icon.png";
import { Button } from "../components/Button";

export const HowWeHelp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 my-8 bg-green-0">
      <div className="w-[80%] mx-auto text-center">
        <h2 className="l2_heading mx-auto">How Can We Help You?</h2>
        <p className="description mx-auto">Let’s do great work together</p>
        <div className="relative max-w-5xl mx-auto px-4">
          <hr className="w-[75%] mx-auto invisible lg:visible absolute top-8 left-0 right-0 border-t-2 border-dashed border-gray-300 z-0" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {helpSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <div className="bg-white p-3 rounded-full shadow-md z-10">
                  {activeIndex === index ? (
                    <img
                      src={greenPyramid}
                      alt={`Step ${index + 1}`}
                      className="w-10 h-10"
                    />
                  ) : (
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-full" />
                  )}
                </div>
                <p
                  className={`text-sm max-w-[110px] ${
                    activeIndex === index
                      ? "font-semibold text-gray-800"
                      : "text-gray-600"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          <Button variant="plain" className="mt-4">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};
