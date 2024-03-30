import { createContext, useEffect, useState } from "react";
export const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {

    const [photos, setPhotos] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const liked = photos.filter((photo) => photo.liked);


    useEffect(() => {
        fetch("./photos.json")
            .then((res) => res.json())
            .then(({ photos }) => {
                setPhotos(photos);
            });
    }, []);

    useEffect(() => { setFavorites(favorites) }, [photos]);

    const buttonLike = (id) => {
        const newPhoto = photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, liked: !photo.liked };
            }
            return photo;
        });
        setPhotos([...newPhoto]);
        
        const favs = photos.filter(photo => photo.liked === true)
        setFavorites([...favs]);
    };
    return (
        <PhotosContext.Provider value={{ photos, liked, buttonLike, favorites}}>
            {children}
        </PhotosContext.Provider>
    );

};

export default PhotosProvider;