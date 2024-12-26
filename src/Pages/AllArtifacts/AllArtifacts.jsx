import { useLoaderData } from "react-router-dom";
import { AllArtifactsCard } from "./AllArtifactsCard";
import { Fade } from "react-awesome-reveal";
import bg from "../../assets/img/s2.png";
// import AllArtifactsCard from "./AllArtifactsCard";

const AllArtifacts = () => {
  const allData = useLoaderData();
  // const [loading, setLoading] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Fade direction="up">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-black mb-4 animate__animated animate__fadeInDown">
            Explore the World of Artifacts
          </h1>
          <p className="text-2xl text-gray-400 animate__animated animate__fadeInUp">
            Dive into the treasure trove of historical artifacts curated just
            for you.
          </p>
        </div>
      </Fade>

      {/* Conditional rendering starts here */}
      {allData.length === 0 ? (
        <div className="text-center text-3xl text-red-500 py-12 animate__animated animate__shakeX">
          No Artifacts Found
        </div>
      ) : (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allData.map((data) => (
            <div key={data._id} className="animate__animated animate__zoomIn">
              <AllArtifactsCard data={data}></AllArtifactsCard>
            </div>
          ))}
        </div>
      )}

      {/* Static additional section */}
      <Fade direction="up">
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg w-10/12 mx-auto animate__animated animate__fadeIn">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Why Artifacts Matter
          </h2>
          <p className="text-lg text-gray-700">
            Artifacts are not just items from the past—they&apos;re windows into
            the lives, stories, and cultures that came before us. Each piece
            carries a story, a fragment of history that helps us understand our
            present and shape our future. Join us in preserving and celebrating
            these treasures.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AllArtifacts;
