/* eslint-disable react/prop-types */
// import { Fade } from "react-awesome-reveal";
import Cards from "../AllArtifacts/Cards";

const FeaturedArt = ({ data }) => {
  return (
    // <Fade direction="up">
    <div className="w-10/12 mx-auto">
      <div className="text-center space-y-5 my-20">
        <h4 className="text-[#B0A78A] font-bold">Timekeeper&apos;s Archive</h4>
        <h2 className="text-[#252930] text-5xl font-bold">
          Latest From Our News
        </h2>
      </div>
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
