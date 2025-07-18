import { BlogSection } from "./layouts/BlogSection";
import { BrandLogos } from "./layouts/BrandLogos";
import { Features } from "./layouts/Features";
import { Footer } from "./layouts/Footer";
import { Hero } from "./layouts/Hero";
import { HowWeHelp } from "./layouts/HowWeHelp";
import { Newsletter } from "./layouts/Newsletter";
import { SocialMediaPromo } from "./layouts/SocialMediaPromo";

function App() {
  return (
    <main>
      <Hero />
      <BrandLogos />
      <Features />
      <SocialMediaPromo />
      <HowWeHelp />
      <BlogSection />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
