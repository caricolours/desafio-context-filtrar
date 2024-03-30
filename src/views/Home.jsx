import { PhotosContext } from "../Context/PhotosContext";
import Gallery from "../components/Gallery";
import { useContext } from "react";

const Home = () => {

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
