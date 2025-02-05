import clock from "../assets/img/clock.png";
import location from "../assets/img/location.gif";
import ticket from "../assets/img/ticket.png";
const BannerHelper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto mb-10">
      <div className=" p-4 shadow-2xl dark:bg-gray-50 dark:text-gray-800 bg-[#FFFFFF]">
        <div className="space-y-4">
          <div className="space-y-2 flex justify-center p-5">
            <img
              src={clock}
              alt=""
              className="block object-cover object-center w-20 h-20 p-3 rounded-full dark:bg-gray-500 border-2 bg-slate-300 shadow-2xl border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl text-center font-semibold dark:text-violet-600">
                Open Hours
              </h3>
            </a>
            <p className="leading-snug text-center dark:text-gray-600">
              Daily: 9.30 AM–6.00 PM
            </p>
            <p className="leading-snug text-center dark:text-gray-600">
              Sunday & Holidays: Closed
            </p>
            <div className="flex justify-center">
              <button className="border-2 border-slate-700 py-2 px-5">
                All Hours
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4 shadow-2xl dark:bg-gray-50 dark:text-gray-800 bg-[#252930]">
        <div className="space-y-4">
          <div className="space-y-2 flex justify-center p-5">
            <img
              src={location}
              alt=""
              className="block object-cover object-center w-20 h-20 rounded-full dark:bg-gray-500 border-2  shadow-2xl border-slate-700"
            />
          </div>
          <div className="text-white space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl text-center font-semibold dark:text-violet-600">
                Find Location
              </h3>
            </a>
            <p className="leading-snug text-center dark:text-gray-600">
              Timekeeper Museums 32 Quincy
            </p>
            <p className="leading-snug text-center dark:text-gray-600">
              Street Cambridge, MA
            </p>
            <div className="flex justify-center">
              <button className="border-2 border-slate-700 py-2 px-5">
                Get Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4 shadow-2xl dark:bg-gray-50 dark:text-gray-800 bg-[#FFFFFF]">
        <div className="space-y-4">
          <div className="space-y-2 flex justify-center p-5">
            <img
              src={ticket}
              alt=""
              className="block object-cover object-center w-20 h-20 p-3 rounded-full dark:bg-gray-500 border-2 bg-slate-300 shadow-2xl border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl text-center font-semibold dark:text-violet-600">
                Get Ticket
              </h3>
            </a>
            <p className="leading-snug text-center dark:text-gray-600">
              Muszex Museums 32 Quincy
            </p>
            <p className="leading-snug text-center dark:text-gray-600">
              Street Cambridge, MA
            </p>
            <div className="flex justify-center">
              <button className="border-2 border-slate-700 py-2 px-5">
                Buy Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHelper;
