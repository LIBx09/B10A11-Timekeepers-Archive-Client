import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedArt from "./FeaturedArt";
import AboutTimekeeper from "./AboutTimekeeper";
import CaroselTwo from "./CaroselTwo";
import FeatureCollection from "./FeatureCollection";
import CarouselOne from "./CarouselOne";
import UpComing from "./UpComing";
import bg from "../../assets/img/ashBg.jpg";
import Exhibits from "./Exhibits";

const Home = () => {
  const featuredArtifacts = useLoaderData();
  // console.log(featuredArtifacts);
  return (
    <main className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white-100shadow-md">
      <section className="w-full">
        <Banner />
      </section>
      <section className="w-11/12 mx-auto my-10">
        <AboutTimekeeper />
      </section>
      <section className=" my-10">
        <CarouselOne />
      </section>
      <section className="">
        <FeaturedArt data={featuredArtifacts} />
      </section>
      <section className=" w-11/12 mx-auto my-20">
        <Exhibits />
      </section>
      <section
        className="my-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <UpComing />
      </section>
      <section className="w-11/12 mx-auto my-10">
        <FeatureCollection />
      </section>
      <section className="my-20">
        <CaroselTwo />
      </section>
    </main>
  );
};

export default Home;
