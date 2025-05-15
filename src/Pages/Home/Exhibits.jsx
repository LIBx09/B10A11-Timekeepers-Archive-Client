import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Exhibits = () => {
  return (
    <section className="bg-gradient-to-br from-[#2c2e31] via-black to-gray-400 text-white py-20 px-6 min-h-[400px] flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl md:text-5xl font-bold text-[#AAA081] mb-6">
            More Than 1250 Exhibits!
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            New treasures arrive at our museum every day. Don’t miss the
            opportunity to experience history, art, and culture up close. Grab
            your ticket now!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/allArtifacts">
              <button className="px-8 py-3 rounded-lg bg-[#AAA081] text-black font-semibold hover:bg-[#99906f] transition duration-200">
                Explore Collection
              </button>
            </Link>
            <Link to="/buy-ticket">
              <button className="px-8 py-3 rounded-lg border border-[#AAA081] text-[#AAA081] font-semibold hover:bg-[#AAA081] hover:text-black transition duration-200">
                Buy Tickets
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Exhibits;
