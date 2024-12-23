import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Details = () => {
  const artifactDetails = useLoaderData();
  const [artifact, setArtifact] = useState(artifactDetails); // State for artifact details
  const { user } = useAuth();
  const {
    _id,
    artifactName,
    historicalContext,
    likeCount,
    likedBy = [],
  } = artifact;

  // Assume currentUserEmail comes from your authentication context or props
  const currentUserEmail = user?.email; // Replace with actual user email

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

      console.log(data.message);
    } catch (error) {
      console.error("Error toggling like/unlike:", error);
    }
  };

  const hasLiked = likedBy.includes(currentUserEmail);

  return (
    <div>
      <h3>{artifactName}</h3>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{artifactName}</h2>
          <p>{historicalContext}</p>
          <p>Likes: {likeCount}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleLikeUnlike(_id, currentUserEmail)}
              className="btn"
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
