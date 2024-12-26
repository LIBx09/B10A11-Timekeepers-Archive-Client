/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyArtiCards = ({ artifact, onDelete }) => {
  console.log(artifact);
  return (
    <div>
      <div className="relative group h-64 overflow-hidden rounded-xl shadow-xl">
        <img
          src={artifact.artifactImage}
          alt={artifact.artifactName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

        <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-60 text-white transition-transform duration-500 translate-y-full group-hover:translate-y-0">
          <h2 className="text-lg font-bold">{artifact.artifactName}</h2>
          <p className="text-sm">{artifact.historicalContext}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">
              <p className="text-sm">
                {artifact.likeCount
                  ? `Likes: ${artifact.likeCount}`
                  : "No likes yet"}
              </p>
            </p>
            <div className="flex space-x-2">
              <button className="btn btn-primary text-sm">
                <Link to={`/update/${artifact._id}`}>Update</Link>
              </button>
              <button
                // onClick={() => handleDelete(artifact._id)}
                onClick={() => onDelete(artifact._id)}
                className="btn btn-danger text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtiCards;
