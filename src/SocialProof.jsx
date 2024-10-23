export default function SocialProof() {
  return (
    <>
      <div className="grid gap-10 grid-cols-12 md:max-w-6xl justify-between m-auto mt-10">
        <h3 className="font-semibold lg:col-span-2 md:text-center lg:text-left md:col-span-12 col-span-12 text-left">
          Trusted by Global Companies
        </h3>
        <div className="flex md:col-span-12 lg:col-span-10 col-span-12 flex-wrap gap-12 m-auto    ">
          <img src="apple.svg" alt="" />
          <img src="adobe.svg" alt="" />
          <img src="slack.svg" alt="" />
          <img src="spotify.svg" alt="" />
          <img src="google.svg" alt="" />
        </div>
      </div>
    </>
  );
}
