import { Fade } from "react-awesome-reveal";
import bg from "../assets/img/ashBg.jpg"; // Replace with your background image

const AboutArtifacts = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white py-16 px-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-5xl mx-auto bg-black bg-opacity-70 rounded-xl p-10 shadow-lg backdrop-blur-sm">
        <Fade direction="up" cascade triggerOnce>
          <h1 className="text-5xl font-bold text-center text-[#AAA081] mb-6">
            About All Artifacts
          </h1>
          <p className="text-lg mb-6 text-gray-300 leading-relaxed text-justify">
            Welcome to{" "}
            <span className="font-semibold text-white">All Artifacts</span> — a
            platform devoted to preserving, discovering, and celebrating the
            wonders of human history. Whether you’re a passionate collector, a
            cultural explorer, or simply curious, we’re here to connect you to a
            treasure trove of historical stories.
          </p>

          <h2 className="text-3xl font-semibold text-[#AAA081] mb-4">
            Our Mission
          </h2>
          <p className="text-base text-gray-300 mb-6 text-justify">
            We aim to provide a digital space where history comes alive through
            the artifacts left behind. Our goal is to make ancient knowledge,
            culture, and creativity accessible and engaging for everyone.
          </p>

          <h2 className="text-3xl font-semibold text-[#AAA081] mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>Curated artifact collections from around the world</li>
            <li>User-submitted artifacts and stories</li>
            <li>Dynamic sorting, filtering, and search features</li>
            <li>Community-driven interactions through likes and shares</li>
          </ul>

          <h2 className="text-3xl font-semibold text-[#AAA081] mb-4">
            Our Vision
          </h2>
          <p className="text-base text-gray-300 text-justify">
            To be the leading online destination for artifact lovers and history
            enthusiasts. We envision a world where historical artifacts are not
            forgotten, but instead shared, studied, and cherished.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default AboutArtifacts;
