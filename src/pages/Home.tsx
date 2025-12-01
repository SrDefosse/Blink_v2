import HomeHero from "../components/home/HomeHero";
import Values from "../components/home/Values";
import Process from "../components/home/Process";
import ShowCase2 from "../components/home/ShowCase2";
import ContactSection from "../components/home/Contact";
import BentoGrid from "../components/home/BentoGrid";

export default function Home() {
  return (
    <>
      <section>
        <HomeHero />
      </section>
      <section>
        <BentoGrid />
      </section>
      <section>
        <Values />
      </section>
      <section>
        <Process />
      </section>
      
      <section>
        <ShowCase2 />
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  )
}


