/* eslint-disable react/prop-types */
// import { Fade } from "react-awesome-reveal";
import Loading from "../../components/Loading/Loading";
import Cards from "../AllArtifacts/Cards";

const FeaturedArt = ({ data }) => {
  return (
    // <Fade direction="up">
    <div className="w-11/12 mx-auto">
      <div className="text-center space-y-5 my-10">
        <h4 className="text-[#B0A78A] font-bold">Timekeeper&apos;s Archive</h4>
        <h2 className="text-[#252930] dark:text-slate-200 text-5xl font-bold">
          Latest From Our News
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data && data.length > 0 ? (
          data.map((futureData) => (
            <Cards key={futureData._id} data={futureData} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
    // </Fade>
  );
};

export default FeaturedArt;
