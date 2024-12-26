import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";

const AllLikedPage = () => {
  const axiosSecure = useAxios();
  const [allLiked, setAllLiked] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
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
    <div className="min-h-screen bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Liked Artifacts</h2>
      {allLiked?.length > 0 ? (
        <div className="overflow-x-auto mx-auto max-w-5xl">
          <table className="table table-zebra w-full">
            {/* Table Header */}
            <thead>
              <tr>
                <th>#</th>
                <th>Artifact Name</th>
                <th>Image</th>
                <th>Historical Context</th>
                <th>Likes</th>
                <th>Details</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {allLiked.map((artifact, index) => (
                <tr key={artifact._id}>
                  <th>{index + 1}</th>
                  <td>{artifact.artifactName || "N/A"}</td>
                  <td>
                    <div className="w-16 h-16">
                      <img
                        src={artifact.artifactImage || "/placeholder.jpg"}
                        alt={artifact.artifactName || "Artifact"}
                        className="object-cover rounded w-20 h-16"
                      />
                    </div>
                  </td>
                  <td>
                    {artifact.historicalContext || "No context available"}
                  </td>
                  <td>{artifact.likeCount || 0}</td>
                  <td>
                    <button className="btn  px-4 py-2 rounded  hover:bg-[#AAA081] text-sm font-semibold">
                      <Link to={`/details/${artifact._id}`}>View Details</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">No liked artifacts found.</p>
        </div>
      )}
    </div>
  );
};

export default AllLikedPage;
