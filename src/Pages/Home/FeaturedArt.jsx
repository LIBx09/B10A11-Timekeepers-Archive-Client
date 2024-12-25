/* eslint-disable react/prop-types */
// import { Fade } from "react-awesome-reveal";
import Cards from "../AllArtifacts/Cards";

const FeaturedArt = ({ data }) => {
  return (
    // <Fade direction="up">
    <div className="w-10/12 mx-auto">
      <h2>Feature Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((futureData) => (
          <Cards key={futureData._id} data={futureData}></Cards>
        ))}
      </div>
    </div>
    // </Fade>
  );
};

export default FeaturedArt;
