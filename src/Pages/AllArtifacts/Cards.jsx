/* eslint-disable react/prop-types */
import "./light_glint.css";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  const { artifactName, artifactImage, historicalContext, likeCount } = data;
  return (
    <div>
      <div className="card bg-base-100 image-full h-56 shadow-xl">
        <figure>
          <img src={artifactImage} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artifactName}</h2>
          <p>{historicalContext}</p>
          <div className="card-actions items-center justify-end">
            <p>Like Count {likeCount}</p>
            <button className="btn btn-primary">
              <Link to={`/details/${data._id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative group w-64 h-64 overflow-hidden">
        <img
          src={artifactImage}
          alt="Example"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
        <div className="reflective-effect"></div>
      </div>
    </div>
  );
};

export default Cards;
