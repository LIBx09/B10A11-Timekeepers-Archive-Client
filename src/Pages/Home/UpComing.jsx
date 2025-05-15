import { Link } from "react-router-dom";
import up1 from "../../assets/img/upcoming.jpg";
import up2 from "../../assets/img/upcoming1.jpg";
import up3 from "../../assets/img/upcoming2.jpg";

const events = [
  {
    id: 1,
    date: "31st",
    title: "Weekend Drop-In Sessions",
    description: "Man face fruit divided seasons herb from herb moveth whose.",
    image: up1,
  },
  {
    id: 2,
    date: "15th",
    title: "Art History Exploration",
    description: "Learn about ancient artifacts and their significance.",
    image: up2,
  },
  {
    id: 3,
    date: "9th",
    title: "Meet the Curators",
    description: "An exclusive talk with the minds behind the exhibition.",
    image: up3,
  },
];

const UpComing = () => {
  return (
    <section className="w-9/12 max-w-7xl mx-auto py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <h4 className="text-[#867b57] font-bold uppercase tracking-wider text-sm">
          What&apos;s Going On
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#252930] dark:text-slate-200">
          Our Upcoming Events
        </h2>
      </div>

      {/* Events List */}
      {events.map(({ id, date, title, description, image }) => (
        <div
          key={id}
          className="bg-base-200 rounded-2xl shadow-md p-6 flex flex-col lg:flex-row items-center gap-8 transition-transform hover:scale-[1.01]"
        >
          {/* Date */}
          <div className="text-center shrink-0">
            <h2 className="text-2xl font-bold text-[#867b57]">{date}</h2>
            <p className="text-sm text-gray-600">Date</p>
          </div>

          {/* Image with hover design */}
          <div className="relative group shrink-0">
            <div className="relative w-[200px] h-[200px]">
              <div className="absolute inset-0 z-0 group-hover:rotate-90 transition-transform duration-500">
                <div className="absolute -z-10 w-full h-full top-0 left-0">
                  <div className="border-l-8 border-[#aaa081] transform -rotate-45 h-full absolute left-1/3"></div>
                  <div className="border-l-2 border-[#aaa081] transform -rotate-45 h-full absolute left-2/3"></div>
                </div>
              </div>
              <img
                src={image}
                alt={`Event ${title}`}
                className="rounded-full h-full w-full object-cover shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Link */}
          <div className="w-full lg:w-auto">
            <Link
              to="/about"
              className="block text-center w-full border border-[#aaa081] text-[#333] hover:bg-[#aaa081] hover:text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpComing;
