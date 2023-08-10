import React from 'react'
import './SortingNavbarStyles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function SortingNavbar({heading}) {

    const [fillWidth, setFillWidth] = useState(0);

    const handleMouseDown = (event) => {
        const rangeBar = event.target.getBoundingClientRect();
        const offsetX = event.clientX - rangeBar.left;
        const rangeBarWidth = rangeBar.width;

        const handleMouseMove = (event) => {
            let newOffset = event.clientX - rangeBar.left - offsetX;
            if (newOffset < 0) {
                newOffset = 0;
            } else if (newOffset > rangeBarWidth) {
                newOffset = rangeBarWidth;
            }
            const newFillWidth = (newOffset / rangeBarWidth) * 100;
            setFillWidth(newFillWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
    return (
        <div className="row">
            <h5 className='text-uppercase text-center my-5'>{heading}</h5>
            <div className="sorting-navbar">
                <div className="left-nav px-3">
                    <div className="grid-icon notfill mx-1 d-none d-sm-block d-md-block">
                        <Link to="/new-releases"> <i className="bi bi-grid-3x3-gap-fill fs-4"></i></Link>
                    </div>
                    <div className="grid-icon fill mx-1 d-none d-sm-block d-md-block">
                        <Link to="/grid4*4"><i className="bi bi-grid-fill fs-4 mx-2"></i></Link>
                    </div>
                </div>
                <div className="right-nav p-0 px-4 " >
                    <div className="sort p-3">
                        <div className="dropdown1">
                            <div className='dropdown1-btn btn text-dark text-uppercase'>
                                sort<i class="bi bi-chevron-down down-arrow mx-1"></i>
                            </div>
                            <div className="dropmenu1">
                                <ul className='p-1'>
                                    <li className='list-none m-1 my-2'><Link className='text-decor  text-dark text-uppercase' to="">best selling</Link></li>
                                    <li className='list-none m-1 my-2'><Link className='text-decor  text-dark text-uppercase' to="">alphabetically, a-z</Link></li>
                                    <li className='list-none m-1 my-2'><Link className='text-decor text-dark text-uppercase' to="">alphabetically, z-a</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="filter p-3 ">
                        <button className="btn text-uppercase" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <span>filters</span> </button>

                        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div className="offcanvas-header p-4">
                                <h5 className="offcanvas-title text-uppercase" id="offcanvasScrollingLabel">filters</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body m-0 d-block">
                                <ul className='p-0 px-2 '>
                                    <li><h5 className='text-uppercase'>availabilty</h5></li>
                                    <li><Link className='my-2' to="">In stock (30)</Link></li>
                                    <li><Link className='my-2' to="">Out of stock (31) </Link></li>
                                </ul>
                                <h5 className='text-uppercase px-2 mt-4'>price</h5>
                                <div className="price-range d-none d-md-block">
                                    <div
                                        className="price-range-bar"
                                        onMouseDown={handleMouseDown}
                                        style={{ cursor: "pointer" }}
                                    ><div
                                        className="price-range-bar-fill"
                                        style={{ width: `${fillWidth}%` }}
                                    ></div>
                                    </div>
                                </div>
                                <div className="rupees mt-3">
                                    <div className="low ">
                                        <div className="rs">
                                            <h4 className='m-0 p-1 fs-6'>Rs</h4>
                                        </div>
                                        <div className="min">
                                            <input className='m-0 p-1 fs-6 w-100 border-0' type="number" min={1} />
                                        </div>
                                    </div>
                                    <div className="high ">
                                        <div className="rs">
                                            <h4 className='m-0 p-1 fs-6'>Rs</h4>
                                        </div>
                                        <div className="max">
                                            <input className='m-0 p-1 fs-6 w-100 border-0' type="number" max={3000} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-footer p-4">
                                <button className='p-2'>results</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortingNavbar