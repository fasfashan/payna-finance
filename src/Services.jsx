export default function Services() {
  return (
    <>
      <div className="md:max-w-6xl mt-28 m-auto">
        <div className="flex gap-4 m-auto flex-col items-center text-center ">
          <div className="space-y-2">
            <h4 className="font-extrabold text-secondaryOrange">WORK BETTER</h4>
            <h3 className="font-extrabold text-4xl text-title">
              For Your Business
            </h3>
          </div>
          <p className="text-paragraph max-w-md">
            We did research what your company needs and here we are providing
            all of them just for you
          </p>
        </div>
        <div className="grid gap-20 grid-cols-6 mt-20">
          <div className="flex  items-start lg:col-span-2  md:col-span-3 col-span-6 gap-4">
            <img src="/share-insights-icon.svg" alt="" />
            <div className="flex gap-2 flex-col ">
              <h3 className="font-semibold text-xl text-title">
                Share Insights
              </h3>
              <p className="text-paragraph max-w-md">
                Working together with your team to make decisions
              </p>
            </div>
          </div>
          <div className="flex  items-start lg:col-span-2  md:col-span-3 col-span-6 gap-4">
            <img src="/track-leads-icon.svg" alt="" />
            <div className="flex gap-2 flex-col ">
              <h3 className="font-semibold text-xl text-title">Track Leads</h3>
              <p className="text-paragraph max-w-md">
                See where your money goes and comes in business
              </p>
            </div>
          </div>
          <div className="flex  items-start lg:col-span-2  md:col-span-3 col-span-6 gap-4">
            <img src="/offline-mode.svg" alt="" />
            <div className="flex gap-2 flex-col ">
              <h3 className="font-semibold text-xl text-title">Offline Mode</h3>
              <p className="text-paragraph max-w-md">
                Use the feature while off from internet? sure can
              </p>
            </div>
          </div>
          <div className="flex  items-start lg:col-span-2  md:col-span-3 col-span-6 gap-4">
            <img src="/kanban-mode-icon.svg" alt="" />
            <div className="flex gap-2 flex-col ">
              <h3 className="font-semibold text-xl text-title">Kanban Mode</h3>
              <p className="text-paragraph max-w-md">
                Organize the report that easy to be understand
              </p>
            </div>
          </div>
          <div className="flex  items-start lg:col-span-2  md:col-span-3 col-span-6 gap-4">
            <img src="/reward-system-icon.svg" alt="" />
            <div className="flex gap-2 flex-col ">
              <h3 className="font-semibold text-xl text-title">
                Reward System
              </h3>
              <p className="text-paragraph max-w-md">
                Motivate your team working harder and receive a gift
              </p>
            </div>
          </div>
          <div className="flex  items-start lg:col-span-2  md:col-span-3 col-span-6 gap-4">
            <img src="/country-icon.svg" alt="" />
            <div className="flex gap-2 flex-col ">
              <h3 className="font-semibold text-xl text-title">189 Country</h3>
              <p className="text-paragraph max-w-md">
                Working together worldwide people from anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
