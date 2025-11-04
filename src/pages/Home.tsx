import HomeHero from "../components/home/HomeHero";
import Values from "../components/home/Values";
import Process from "../components/home/Process";
import ShowCase1 from "../components/home/ShowCase1";
import ShowCase2 from "../components/home/ShowCase2";
import ContactSection from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <section>
        <HomeHero />
      </section>
      <section>
        <Values />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <ShowCase1 />
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


