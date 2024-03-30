import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PhotosProvider from "./Context/PhotosContext";

//const PHOTO_URL = "/photos.json";


const App = () => {
    
  return (
    <>
      <PhotosProvider>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
      </PhotosProvider>
    </>
  );
};
export default App;
