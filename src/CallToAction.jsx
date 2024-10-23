export default function CallToAction() {
  return (
    <>
      <main className="md:max-w-6xl grid gap-5 grid-cols-12  mt-36 mb-20 gap-y-20 m-auto">
        <img
          className="lg:col-span-7  flex items-center col-span-12 m-auto text-center w-fit "
          src="/thumbnail-video.png"
          alt="Hero Image"
        />
        <div className="lg:col-span-5 flex justify-center flex-col col-span-12 text-center lg:text-left md:max-w-md m-auto ">
          <div className="space-y-4">
            <h4 className="font-extrabold text-secondaryOrange">
              SAVE MORE TIME
            </h4>
            <h3 className="font-extrabold text-4xl text-title">
              And Boost Productivity
            </h3>
          </div>
          <p className="text-paragraph leading-loose mt-5 mb-10">
            Your employees can bring any success into your business, so we need
            to take care of them
          </p>
          <div className="flex md:gap-0 gap-4 md:flex-row flex-col items-center">
            <input
              className=" py-3 md:w-fit w-full bg-gray lg:rounded-l-full md:rounded-l-full rounded-full pl-6"
              type="email"
              name=""
              placeholder="Email address"
              id=""
            />
            <button className="bg-primaryBlue md:w-fit w-full lg:self-start md:self-center  text-white xl:flex md:flex lg:-ml-8  py-3 rounded-full font-semibold px-10 hover:bg-opacity-70 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
