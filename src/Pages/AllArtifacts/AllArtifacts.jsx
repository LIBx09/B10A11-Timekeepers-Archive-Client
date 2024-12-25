import { useLoaderData } from "react-router-dom";
import { AllArtifactsCard } from "./AllArtifactsCard";
// import AllArtifactsCard from "./AllArtifactsCard";

const AllArtifacts = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <div>ALL Artifacts:: {allData.length}</div>
      <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allData.map((data) => (
          <AllArtifactsCard key={data._id} data={data}></AllArtifactsCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
