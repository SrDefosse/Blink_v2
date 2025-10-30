
export default function Process() {
  return (
    <main className="bg-[#FAF8F3]">
      <div className="wrapper">
        <section className="text-gray-900 h-screen w-full bg-[#FAF8F3] grid place-content-center sticky top-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          </h1>
        </section>

        <section className="bg-[#FAF8F3] text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            We have a process that we follow to create the best web experiences for our clients <br />
          </h1>
        </section>

        <section className="text-gray-900 h-screen w-full bg-[#FAF8F3] grid place-content-center sticky top-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            Keep scrolling ;)
          </h1>
        </section>
      </div>

      <section className="text-gray-900 w-full bg-[#FAF8F3]">
        <div className="grid grid-cols-2">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              We will meet with you to understand your business and your goals
            </h1>
          </div>
          <div className="grid gap-2">
            <figure className="grid place-content-center -skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="grid place-content-center skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="grid place-content-center -skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="grid place-content-center skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-80 h-96 align-bottom object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="text-gray-900 w-full bg-[#FAF8F3]">
        <div className="grid grid-cols-2 px-8">
          <div className="grid gap-2">
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <img
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                alt=""
                className="transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-md"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="sticky top-0 h-screen grid place-content-center">
            <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
              We will create a plan for the project based on your business and your goals
            </h1>
          </div>
        </div>
      </section>

      <footer className="group bg-[#FAF8F3]">
        <h1 className="text-[12vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent transition-all ease-linear">
          BLINK STUDIO
        </h1>
      </footer>
    </main>
  );
}
