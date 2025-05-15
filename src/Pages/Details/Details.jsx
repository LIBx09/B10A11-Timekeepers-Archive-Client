import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import {
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
} from "react-icons/fa";
import { MdHistoryEdu } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  const artifactDetails = useLoaderData();
  const [artifact, setArtifact] = useState(artifactDetails);
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    _id,
    artifactName,
    artifactImage,
    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    adderName,
    adderEmail,
    likeCount,
    likedBy = [],
  } = artifact;

  const currentUserEmail = user?.email;
  const hasLiked = likedBy.includes(currentUserEmail);

  const handleLikeUnlike = async (id, email) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/artifacts/like-unlike/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) throw new Error("Failed to toggle like/unlike");

      const data = await response.json();
      setArtifact((prev) => ({
        ...prev,
        likeCount: data.likeCount,
        likedBy: data.likedBy,
      }));
    } catch (error) {
      console.error("Error toggling like/unlike:", error);
    }
  };

  return (
    <section className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div className="w-full h-64 sm:h-80 md:h-[400px] overflow-hidden">
          <img
            src={artifactImage}
            alt={artifactName}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                <MdHistoryEdu className="text-blue-600" /> {artifactName}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {historicalContext}
              </p>

              <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-2">
                  <FaClock className="text-gray-500" />
                  <span className="font-medium">Created At:</span> {createdAt}
                </p>
                <p className="flex items-center gap-2">
                  <FaClock className="text-gray-500" />
                  <span className="font-medium">Discovered At:</span>{" "}
                  {discoveredAt}
                </p>
                <p className="flex items-center gap-2">
                  <FaUser className="text-green-600" />
                  <span className="font-medium">Discovered By:</span>{" "}
                  {discoveredBy}
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span className="font-medium">Location:</span>{" "}
                  {presentLocation}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                Added By
              </h3>
              <div className="mt-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-2">
                  <FaUser className="text-blue-600" /> {adderName}
                </p>
                <p className="text-sm break-all">{adderEmail}</p>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Likes:</span>{" "}
                  {likeCount || "No likes yet"}
                </p>
                <button
                  onClick={() => handleLikeUnlike(_id, currentUserEmail)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-md text-white font-semibold shadow-md transition-colors duration-300 ${
                    hasLiked
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {hasLiked ? <FaHeart /> : <FaRegHeart />}{" "}
                  {hasLiked ? "Unlike" : "Like"}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p>If you want to visite the museum -</p>
              <Link to="/buy-ticket">
                <button className="hover:bg-[#252930] hover:text-white bg-[#AAA081] border-2 border-slate-200 py-2 px-4">
                  Ticket
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
