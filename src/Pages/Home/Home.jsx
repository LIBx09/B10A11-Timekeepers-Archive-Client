import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedArt from "./FeaturedArt";
import AboutTimekeeper from "./AboutTimekeeper";
import CaroselTwo from "./CaroselTwo";
import FeatureCollection from "./FeatureCollection";

const Home = () => {
  const featuredArtifacts = useLoaderData();
  // console.log(featuredArtifacts);
  return (
    <main className="">
      <section className="w-12/12 mx-auto">
        <Banner />
      </section>
      <section className="w-10/12 mx-auto">
        <AboutTimekeeper />
      </section>
      <section className="">
        <FeaturedArt data={featuredArtifacts} />
      </section>
      <section>
        <FeatureCollection />
      </section>
      <section className="my-20">
        <CaroselTwo />
      </section>
    </main>
  );
};

export default Home;
