export default function SocialProof() {
  return (
    <>
      <div className="grid gap-10 grid-cols-12 md:max-w-6xl justify-between m-auto mt-10">
        <h3 className="font-semibold lg:col-span-2 md:text-center lg:text-left md:col-span-12 col-span-12 text-left">
          Trusted by Global Companies
        </h3>
        <div className=" md:col-span-12 lg:col-span-10 col-span-12 grid grid-cols-5 gap-12     ">
          <img className="md:col-span-1 col-span-2" src="apple.svg" alt="" />
          <img className="md:col-span-1 col-span-2" src="adobe.svg" alt="" />
          <img className="md:col-span-1 col-span-2" src="slack.svg" alt="" />
          <img className="md:col-span-1 col-span-2" src="spotify.svg" alt="" />
          <img className="md:col-span-1 col-span-2" src="google.svg" alt="" />
        </div>
      </div>
    </>
  );
}
