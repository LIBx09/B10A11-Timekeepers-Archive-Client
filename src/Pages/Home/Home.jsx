import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedArt from "./FeaturedArt";

const Home = () => {
  const featuredArtifacts = useLoaderData();
  // console.log(featuredArtifacts);
  return (
    <main className="w-10/12 mx-auto">
      <section>
        <Banner />
      </section>
      <section className="">
        <FeaturedArt data={featuredArtifacts} />
      </section>
    </main>
  );
};

export default Home;
