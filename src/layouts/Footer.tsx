import { footerData } from "../data/footer";

export const Footer = () => {
  return (
    <footer className="w-full bg-green-0 text-white py-12">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr_1fr] lg:items-start gap-8 border border-b-gray-300 pb-8">
        <div className="">
          <div className="w-[170px] flex items-center justify-between">
            <img src={footerData.about.logo} alt="" />
            <h3 className="l3_heading">{footerData.about.title}</h3>
          </div>
          <p className="max-w-[400px] text-[24px] text-gray-1">
            {footerData.about.description}
          </p>
          <div className="w-[200px] flex justify-between mt-6">
            {footerData.socialHandles.map((icon, index) => (
              <img key={index} src={icon} alt="" />
            ))}
          </div>
        </div>

        {footerData.headings.map((section) => (
          <ul key={section.title} className="w-[180px]">
            <h3 className="l3_heading">{section.title}</h3>
            {section.links.map((link) => (
              <li key={link.href} className="text-gray-1 pb-2">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500 mt-12">
        {footerData.copyright}
      </div>
    </footer>
  );
};
