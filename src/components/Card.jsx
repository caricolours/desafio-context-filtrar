import { useContext } from "react";
import {PhotosContext} from "../Context/PhotosContext";
import IconHeart from "./IconHeart";



const Card = ({ photo }) => {
    const { buttonLike } = useContext(PhotosContext);

    return (

        <div
            className="card"
            key={photo.id}
            onClick={() => buttonLike(photo.id)}>
            <div className="badge">
                {photo.liked ? <IconHeart filled /> : <IconHeart />}
            </div>
            <img src={photo.src.medium} alt={photo.title} width={200} height={200} />
            <div className="card-body">
                <p className="card-title">{photo.alt}</p>
                <h5 className="card-text">Author: {photo.photographer}</h5>
            </div>
        </div>

    );
};

export default Card;
