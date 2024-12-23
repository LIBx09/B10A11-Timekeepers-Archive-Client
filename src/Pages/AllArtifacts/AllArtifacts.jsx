import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const AllArtifacts = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <div>ALL Artifacts:: {allData.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allData.map((data) => (
          <Cards key={data._id} data={data}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
