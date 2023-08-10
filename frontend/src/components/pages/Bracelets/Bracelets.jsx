import React, { useState, useEffect } from 'react'
import './BraceletsStyles.css'
import SortingNavbar from '../../sortingnavbar/SortingNavbar'
import ProductCard from '../../productCard/ProductCard'
import { useGetBaraceletDetailsQuery } from '../../../features/bracelets'
import BarLoader from "react-spinners/BarLoader";
import ReactPaginate from 'react-paginate';

function Bracelets() {

    const [braceletImages, setBraceletImages] = useState([]);
    const { data : braceletImagesData } = useGetBaraceletDetailsQuery();
    const routeName = 'bracelet-description';
    const [loading, setLoading] = useState(false);
    const heading = 'Bracelets';


    // const [sort, setSort] = useState({ sort: 'name', order: 'desc' });
    // const [page, setPage] = useState(1);
    // let url = `bracelets?sort=${sort}&page=${page}`
    
    // const handlePageChange = (e)=>{
    //     setPage(e.selected + 1)
    // } 

    

    useEffect(() => {
        if (braceletImagesData) {
            setBraceletImages(braceletImagesData);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [braceletImagesData]);


    return (
        <div className="bracelets-wrapper">
            <SortingNavbar heading={heading} />
            <div className="row py-4 px-5">

                {braceletImages.map((braceletImage, idx) => (
                    <div key={idx} className="col-md-3 col-lg-3 col-sm-6">
                        {
                            loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                :
                                <ProductCard data={braceletImage} routeName={routeName} />
                        }

                    </div>
                ))
                }
                {/* <ReactPaginate
                    breakLabel={"..."}
                    nextLabel={"next >"}
                    onPageChange={(e)=>{handlePageChange(e)}}
                     pageCount={braceletImagesData.pageCount}
                    previousLabel={"< previous"}
                    marginPagesDisplayed = {1}
                    pageRangeDisplayed = {5}


                    containerClassName='pagination'
                    pageClassName = 'page-item'
                    previousClassName = 'page-item'
                    nextClassName = 'page-item'
                    pageLinkClassName = 'link'
                    previousLinkClassName = 'page-link'
                    nextLinkClassName = 'page-link'
                    breakClassName = 'page-item'
                    breakLinkClassName = 'page-link'
                    activeClassName = 'active'
                /> */}
            </div>
        </div>
    )
}

export default Bracelets