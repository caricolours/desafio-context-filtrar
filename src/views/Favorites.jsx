import { useContext } from "react";
import {PhotosContext} from "../Context/PhotosContext";
import Card from "../components/Card";




const Favorites = () => {
  const {favorites, buttonLike } = useContext(PhotosContext);

  return (
  <div className="gallery grid-columns-5 p-3">
    {favorites.map((photo) => (
        <Card 
        key={photo.id}
        photo={photo}
        onClick={() => buttonLike(photo.id)} />
    ))}</div>
      );
    };
export default Favorites;
