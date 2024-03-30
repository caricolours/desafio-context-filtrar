import { useContext } from "react";
import {PhotosContext} from "../Context/PhotosContext";
import Card from "../components/Card";



const Gallery = () => {
  const {photos, buttonLike} = useContext(PhotosContext);
  
  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <Card
          key={photo.id}
          photo={photo}
          onClick={() => buttonLike(photo.id)} />
      ))}</div>
  );
};

export default Gallery;
