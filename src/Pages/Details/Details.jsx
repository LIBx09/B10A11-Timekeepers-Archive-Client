import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Details = () => {
  const artifactDetails = useLoaderData(); // Load artifact details from the route
  const [artifact, setArtifact] = useState(artifactDetails); // State for artifact details
  const { user } = useAuth();

  // Destructure properties from artifact
  const {
    _id,
    artifactName,
    artifactImage,
    artifactType,
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

  // Check if the current user has liked the artifact
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

      if (!response.ok) {
        throw new Error("Failed to toggle like/unlike");
      }

      const data = await response.json();

      // Update artifact state with the latest data
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
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeIn">
        <img
          className="w-full h-64 object-cover"
          src={artifactImage}
          alt={artifactName}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{artifactName}</h2>
          <p className="text-sm text-gray-500 mb-2">Type: {artifactType}</p>
          <p className="text-gray-700">{historicalContext}</p>
          <div className="mt-4">
            <p>
              <span className="font-bold">Created At:</span> {createdAt}
            </p>
            <p>
              <span className="font-bold">Discovered At:</span> {discoveredAt}
            </p>
            <p>
              <span className="font-bold">Discovered By:</span> {discoveredBy}
            </p>
            <p>
              <span className="font-bold">Present Location:</span>{" "}
              {presentLocation}
            </p>
          </div>
          <div className="mt-4">
            <p>
              <span className="font-bold">Added By:</span> {adderName}
            </p>
            <p>
              <span className="font-bold">Adder Email:</span> {adderEmail}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-bold">Likes:</span>{" "}
              {likeCount || "No likes yet"}
            </p>
            <button
              onClick={() => handleLikeUnlike(_id, currentUserEmail)}
              className={`btn px-4 py-2 rounded ${
                hasLiked
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {hasLiked ? "Unlike" : "Like"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
