/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"; // React Router Link

export function AllArtifactsCard({ data }) {
  // Destructure the data props
  const { artifactName, artifactImage, historicalContext, likeCount } = data;
  console.log(data);

  return (
    <div className="relative group h-64 overflow-hidden rounded-xl shadow-xl">
      <img src={artifactImage} alt={artifactName} className="w-full h-full " />

      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Reflective effect */}
      {/* <div className="reflective-effect group-hover:animate-glint"></div> */}

      <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-60 text-white transition-transform duration-500 translate-y-full group-hover:translate-y-0">
        <h2 className="text-lg font-bold">{artifactName}</h2>
        <p className="text-sm">{historicalContext}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm">
            {likeCount ? `Likes: ${likeCount}` : "No likes yet"}
          </p>
          <button className="btn  px-4 py-2 rounded  hover:bg-[#AAA081] text-sm font-semibold">
            <Link to={`/details/${data._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
