import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// import { getImagesAsync } from "../store/ImageSlice/imageSlice";
import Paginstion from "./Paginstion";


const Gallery = () => {
    // const dispatch = useDispatch();
    // const Images = useSelector((state) => state.images.images);
    // useEffect(() => {
    //     dispatch(getImagesAsync());
    // }, []);

    // let imageList = "Loading...";
    // if (Images.length > 0) {
    //     imageList = Images.map((image, index) => (
    //         <div key={index} className="me-3 mb-3">
    //             <img height={200} src={image.download_url} alt="" />
    //             <p>{image.author}</p>
    //             <Link to={`/gallery/${image.id}`}>Details</Link>
    //         </div>
    //     ));
    // }

    return (
        <>
            <Paginstion />
            <hr />
            <Outlet />
            {/* <div className="w-100 d-flex flex-wrap">{imageList}</div> */}
        </>
    );
};

export default Gallery;
