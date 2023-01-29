import React, { useEffect, useState } from 'react'
import Pagination from "rc-pagination";
import '../../node_modules/rc-pagination/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImagesAsync } from '../store/ImageSlice/imageSlice';

const Paginstion = () => {

    const dispatch = useDispatch();
    const Images = useSelector((state) => state.images.images);
    const [currentPage, setCurrentPage] = useState(1)
    // const [value, setValue] = React.useState("");
    let imageList = "Loading...";
    const countPerPage = 8;
    const [collection, setCollection] = useState(Images.slice(0, countPerPage));
    // useEffect(() => {
    //     dispatch(getImagesAsync());
    //     // if (!value) {
    //     //     updatePage(1);
    //     // } else {
    //     //     // searchData.current(value);
    //     //     // console.log("abhi rehne de");
    //     // }
    // }, []);
    useEffect(() => {
        dispatch(getImagesAsync());
    },[]);
    const updatePage = p => {
        console.log("update page called");
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(...Images.slice(from, to));
    };
    console.log(currentPage, collection);

    // const myImageData = () => {
    //     return <>data aaraha</>
    // };

    if (Images.length > 0) {

        console.log(Images.length);


        imageList = Images.slice(currentPage * countPerPage, (currentPage + 1) * countPerPage).map((image, index) => (
            <div key={index} className="me-3 imgcontainer">
                <img src={image.download_url} alt={index} />
                <div className="ingdets d-flex w-100">
                    <span className='pauthor'>{image.author}</span>
                    <Link to={`/gallery/${image.id}`}>Details</Link>
                </div>
            </div>
        ));
    }



    return (
        <>
            <div className="w-100 d-flex flex-wrap">{imageList}</div>
            <div className="d-flex justify-content-center"> <Pagination onChange={updatePage} total={Images.length - countPerPage} current={currentPage} pageSize={countPerPage} /> </div>
        </>
    )
}

export default Paginstion