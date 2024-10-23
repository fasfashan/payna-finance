export default function Navbar() {
  return (
    <>
      <nav className="flex md:max-w-6xl  px-4 py-10 m-auto items-center justify-between">
        <img src="/payna-logo.svg" alt="" />
        <ul className="xl:flex items-start gap-14 hidden ">
          <li className="hover:cursor-pointer font-semibold">Home</li>
          <li className="hover:cursor-pointer "> Features</li>
          <li className="hover:cursor-pointer "> Showcase</li>
          <li className="hover:cursor-pointer "> Pricing</li>
        </ul>
        <button className="bg-gray xl:flex md:flex hidden py-3 rounded-full px-10 hover:bg-neutral-300 transition-all">
          Sign In
        </button>
      </nav>
    </>
  );
}
