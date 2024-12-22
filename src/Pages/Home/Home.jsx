import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const featuredArtifacts = useLoaderData();
  console.log(featuredArtifacts);
  return (
    <main>
      <section>
        <Banner />
      </section>
    </main>
  );
};

export default Home;
