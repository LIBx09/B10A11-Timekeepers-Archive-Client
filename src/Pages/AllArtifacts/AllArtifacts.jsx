import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { AllArtifactsCard } from "./AllArtifactsCard";
import { Fade } from "react-awesome-reveal";
import { FaSortAlphaDown, FaSortAlphaUp, FaSpinner } from "react-icons/fa";
import bg from "../../assets/img/allbg.png";

const AllArtifacts = () => {
  const allData = useLoaderData();
  const [artifacts, setArtifacts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  console.log(artifacts.likeCount);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allData) {
      setArtifacts([...allData]); // Set initial data
      setLoading(false);
    }
  }, [allData]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filteredData = allData.filter((artifact) =>
      artifact.artifactName.toLowerCase().includes(value)
    );
    setArtifacts(filteredData);
  };

  const handleSort = (order) => {
    const sortedData = [...artifacts].sort((a, b) => {
      return order === "asc"
        ? a.likeCount - b.likeCount
        : b.likeCount - a.likeCount;
    });
    setSortOrder(order);
    setArtifacts(sortedData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Page Heading */}
      <Fade direction="up">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-[#AAA081] mb-4">
            Explore the World of Artifacts
          </h1>
          <p className="text-2xl text-gray-300">
            Dive into a treasure trove of historical artifacts curated just for
            you.
          </p>
        </div>
      </Fade>

      {/* Sorting & Loading Spinner */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search artifacts..."
          onChange={handleSearch}
          className="input input-bordered w-full max-w-md"
        />
      </div>
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          onClick={() => handleSort("asc")}
          className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-semibold transition ${
            sortOrder === "asc"
              ? "bg-[#AAA081]"
              : "bg-gray-500 hover:bg-[#AAA081]"
          }`}
        >
          <FaSortAlphaDown /> Ascending
        </button>
        <button
          onClick={() => handleSort("desc")}
          className={`px-4 py-2 flex items-center gap-2 rounded-lg text-white font-semibold transition ${
            sortOrder === "desc"
              ? "bg-[#AAA081]"
              : "bg-gray-500 hover:bg-[#AAA081]"
          }`}
        >
          <FaSortAlphaUp /> Descending
        </button>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <FaSpinner className="animate-spin text-5xl text-blue-500" />
        </div>
      ) : (
        <>
          {/* Conditional Rendering for Data */}
          {artifacts.length === 0 ? (
            <div className="text-center text-3xl text-red-500 py-12 animate__animated animate__shakeX">
              No Artifacts Found
            </div>
          ) : (
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artifacts.map((data) => (
                <div
                  key={data._id}
                  className="animate__animated animate__zoomIn"
                >
                  <AllArtifactsCard data={data} />
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Why Artifacts Matter Section */}
      <Fade direction="up">
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg w-10/12 mx-auto animate__animated animate__fadeIn">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Why Artifacts Matter
          </h2>
          <p className="text-lg text-gray-700">
            Artifacts are not just items from the past—they are windows into the
            lives, stories, and cultures that shaped history. Each piece carries
            a story, a fragment of history that helps us understand our present
            and shape our future. Join us in preserving and celebrating these
            treasures.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AllArtifacts;
