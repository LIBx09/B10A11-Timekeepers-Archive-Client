import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegHeart, FaEye } from "react-icons/fa";

const AllLikedPage = () => {
  const axiosSecure = useAxios();
  const [allLiked, setAllLiked] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchLikedArtifacts = async () => {
      try {
        const response = await axiosSecure.get(
          `/artifacts/liked/${user?.email}`
        );
        setAllLiked(response.data);
      } catch (error) {
        console.error("Error fetching liked artifacts:", error.message);
      }
    };

    if (user?.email) {
      fetchLikedArtifacts();
    }
  }, [axiosSecure, user?.email]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        data-aos="fade-up"
      >
        ❤️ Liked Artifacts
      </h2>

      {allLiked?.length > 0 ? (
        <div className="overflow-x-auto mx-auto max-w-6xl" data-aos="fade-up">
          <table className="w-full border border-gray-200 shadow-lg rounded-lg bg-white">
            {/* Table Header */}
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Artifact Name</th>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4 text-left">Historical Context</th>
                <th className="py-3 px-4 text-left flex items-center gap-2">
                  <FaRegHeart className="text-red-500" /> Likes
                </th>
                <th className="py-3 px-4 text-center">Details</th>
              </tr>
            </thead>

            <tbody>
              {allLiked.map((artifact, index) => (
                <tr
                  key={artifact._id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4 font-semibold text-gray-800">
                    {artifact.artifactName || "N/A"}
                  </td>
                  <td className="py-4 px-4">
                    <div className="w-20 h-16 rounded-lg overflow-hidden shadow">
                      <img
                        src={artifact.artifactImage || "/placeholder.jpg"}
                        alt={artifact.artifactName || "Artifact"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600 truncate max-w-xs">
                    {artifact.historicalContext || "No context available"}
                  </td>
                  <td className="py-4 px-4 font-semibold">
                    {artifact.likeCount || 0}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      to={`/details/${artifact._id}`}
                      className="flex items-center gap-2 bg-[#aaa081] justify-center  hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 text-white px-4 py-2 rounded-lg shadow"
                    >
                      <FaEye /> View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-12" data-aos="fade-up">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default AllLikedPage;
