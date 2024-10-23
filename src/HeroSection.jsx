export default function HeroSection() {
  return (
    <>
      <main className="md:max-w-6xl grid gap-5 grid-cols-12  lg:py-10 md:py-20 py-12 m-auto">
        <div className="lg:col-span-5 flex justify-center flex-col col-span-12 md:text-center lg:text-left md:max-w-md m-auto ">
          <h1 className="md:text-displayXL text-4xl font-extrabold leading-snug text-title">
            Manage Payroll Like an Expert
          </h1>
          <p className="text-paragraph leading-loose mt-5">
            Payna is helping you to setting up the payroll without required any
            finance skills or knowledge before
          </p>
          <button className="bg-primaryBlue w-fit lg:self-start md:self-center mt-8 text-white xl:flex md:flex  py-3 rounded-full font-semibold px-10 hover:bg-opacity-70 transition-all">
            Get Started
          </button>
        </div>
        <img
          className="md:col-span-7 lg:block hidden"
          src="/hero-image.png"
          alt="Hero Image"
        />
      </main>
    </>
  );
}
