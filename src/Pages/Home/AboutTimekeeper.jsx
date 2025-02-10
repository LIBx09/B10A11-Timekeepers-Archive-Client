import tiger from "../../assets/img/tiger.png";
import { motion } from "framer-motion";

const AboutTimekeeper = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" ">
        <div className="flex items-center gap-2">
          <div className="w-12 h-[2px] text-[#848484] bg-[#AAA081] my-5"></div>
          <h4>About Timekeeper&apos;s Archive</h4>
        </div>
        <h2 className=" text-[#aaa081] text-4xl md:text-5xl font-bold mb-10">
          The Art Gallery of San Francisco
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Column - Text Content */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col space-y-6">
          <p className="text-[#000000] font-semibold text-lg md:text-xl leading-relaxed">
            Welcome to the World’s Leading Museum of Modern Art. It includes
            works of art created during the period stretching from about 1860 to
            the 1970s.
          </p>
          <p className="text-[#898989] text-base leading-relaxed">
            Man face fruit divided seasons herb from herb moveth whose. Dominion
            gathered winged morning, man won’t had fly beginning. Winged have
            saying behold morning greater void shall created whose blessed herb
            light fruitful open void without itself whales.
          </p>
          <p className="text-[#898989] text-base leading-relaxed">
            So fish under The given own replenish. Greater land every very
            cattle replenish set unto. Seasons fruitful is cattle evening their
            there, forth she’d Darkness rule gathering. Midst it you’re gathered
            yielding without shall is beast.
          </p>
        </div>

        {/* Middle Column - Floating Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }} // Subtle floating effect
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center items-center"
        >
          <img
            src={tiger}
            alt="Tiger"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </motion.div>

        {/* Right Column - Museum Highlights */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h2 className="text-[#252930] text-3xl md:text-4xl font-semibold">
            On View at Museum
          </h2>
          <p className="text-[#8C8C8C] text-lg font-medium mt-4 leading-relaxed">
            Capitalize on low-hanging fruit to identify a ballpark value-added
            activity to beta test. Override the digital divide with additional
            click-throughs and nanotechnology immersion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#252930] font-bold text-lg mt-6">
            <ul className="list-disc space-y-2 pl-5">
              <div className="w-12 h-[2px]  bg-[#AAA081] my-5"></div>
              <li>Western & Non-Western Cultures</li>
              <li>Artifacts and Antiquities</li>
              <li>Traditional Art</li>
              <li>Contemporary Design</li>
              <li>Middle Eastern Art</li>
            </ul>
            <ul className="list-disc space-y-2 pl-5">
              <div className="w-12 h-[2px]  bg-[#AAA081] my-5"></div>
              <li>War History</li>
              <li>20th Century Design</li>
              <li>Arts of Global Africa</li>
              <li>Gardens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTimekeeper;
