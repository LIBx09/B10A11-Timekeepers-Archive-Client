/* eslint-disable react/prop-types */
import Cards from "../AllArtifacts/Cards";

const FeaturedArt = ({ data }) => {
  return (
    <div>
      <h2>Feature Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((futureData) => (
          <Cards key={futureData._id} data={futureData}></Cards>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArt;
