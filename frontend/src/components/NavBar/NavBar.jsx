import React, { useEffect } from 'react';
import './NavBarStyles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import Cart from '../cart/Cart';
import { logOut, selectCurrentToken } from '../../features/authSlice';


function NavBar() {
    const cartItems = useSelector((state) => state.cart);
    const token = useSelector(selectCurrentToken)
    const location = useLocation();
    const dispatch = useDispatch()


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };


    useEffect(() => {
        const offCanvas = document.getElementById('staticBackdrop');
        if (offCanvas) {
            const offCanvasCloseButton = offCanvas.querySelector('.btn-close');
            if (offCanvasCloseButton) {

                offCanvasCloseButton.click();
            }
        }
    }, [location]);


    return (



        <div className="row">
            <div className="nav-bar-wrapper sticky-top bg-body-tertiary p-1 px-3">
                <div className="col-md-4 col-sm-3 col-lg-4 left-nav">
                    <ul className=" mb-md-0 m-0">
                        <li className='list-style-none mx-2 person account-mob '>
                            {
                                token ?
                                    <Link className='text-decor' aria-current="page" to="/" onClick={() => { dispatch(logOut()) }}>
                                        <i className="bi bi-power fs-3 fw-bold text-dark"></i>
                                    </Link>
                                    :
                                    <Link className='text-decor' aria-current="page" to="/account/login">
                                        <i className="bi bi-person fs-3 fw-bold text-dark"></i>
                                    </Link>
                            }


                        </li>
                        <li className='list-style-none hamburger'>
                            <Link className="btn  d-md-block text-decor" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
                                <i className="bi bi-list text-dark fs-4 fw-bold"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mid-nav col-sm-6 col-md-4 col-lg-4 p-0 ">
                    <ul className="p-0">
                        <li className='list-style-none align-items-center'>
                            <Link className='text-decor' aria-current="page" to="/">
                                <h5 className='text-uppercase fs-2 main-name'>defendo</h5>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="right-nav col-md-4 col-sm-3 col-lg-4">
                    <ul className=" right-nav-ul me-3 mb-2 mb-md-0">
                        <li className='list-style-none mx-2 person account '>
                            <Link className='text-decor' aria-current="page" to="/account/login">
                                <i className="bi bi-person fs-3 fw-bold text-dark"></i>
                            </Link>
                        </li>
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <i className={`bi bi-bag fs-5 fw-bold text-dark ${cartItems.length > 0 ? 'cart-has-items' : ''}`}></i>
                        </button>

                        <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                            <div className="offcanvas-header pb-1">
                                <h2 className="offcanvas-title" id="staticBackdropLabel">cart</h2>
                                <button type="button" className="btn-close fs-6" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <hr />
                            <div className="offcanvas-body p-0">
                                <Cart />
                            </div>
                            <div className="offcanvas-footer ">
                                {
                                    cartItems?.length == 0 ?
                                        <div className='total-price p-2'>
                                            <Link to="/"><h5 className='m-0 p-1'> Proceed to Checkout: {calculateTotalPrice()} </h5></Link>
                                        </div>
                                        :
                                        <div className='total-price p-2'>
                                            <Link to="/checkout"><h5 className='m-0 p-1'> Proceed to Checkout: {calculateTotalPrice()} </h5></Link>
                                        </div>
                                }

                            </div>
                        </div>
                    </ul>
                </div>

            </div>



            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header mb-4">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body m-0  py-5 px-4">
                    <Link className='py-5 ' to="/">Home</Link>
                    <hr />
                    <Link className='py-5 ' to="/new-releases">NEW RELEASES</Link>
                    <hr />
                    <div className="accordion-item">
                        <button className="accordion-button  d-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="shop-cat"><div className="category ">SHOP BY CATEGORY</div><div className="icon"><i className="bi bi-plus-lg fs-6"></i></div></div>
                        </button>
                        <div className="accordion " id="accordionExample">
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="about mb-0 px-3">
                                    <Link className='d-block my-1 py-2 text-uppercase' to="">
                                        <div className="accordion-item">
                                            <button className="accordion-button  d-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                <div className="shop-cat"><div className="category ">SHOP BY CATEGORY</div><div className="icon"><i className="bi bi-plus-lg fs-6"></i></div></div>
                                            </button>
                                            <div className="accordion " id="accordionExample">
                                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="about mb-0 px-3">
                                                        <Link className='d-block my-1 py-2 text-uppercase' to=""> chains</Link>
                                                        <Link className='d-block my-1 py-2 text-uppercase' to="">pendants</Link>
                                                        <Link className='d-block my-1 py-2 text-uppercase' to=""> rings</Link>
                                                        <Link className='d-block my-1 py-2 text-uppercase' to=""> bracelets</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link className='d-block my-1 py-2 text-uppercase' to="">pendants</Link>
                                    <Link className='d-block my-1 py-2 text-uppercase' to=""> rings</Link>
                                    <Link className='d-block my-1 py-2 text-uppercase' to=""> bracelets</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <Link className='py-5 ' to="/coming-soon">COMING SOON</Link>
                    <hr />
                    <div className="about mt-4">
                        <Link className='d-block my-3' to="/contact">Contact Us</Link>
                        <Link className='d-block my-3' to="/faq">FAQs</Link>
                        <Link className='d-block my-3' to="/warranty-coverage">Warranty Coverage</Link>
                        <Link className='d-block my-3' to="/return-refund">Returns & Refunds</Link>
                        <Link className='d-block my-3' to="/account/login">Account</Link>
                    </div>
                </div>
                <div className="offcanvas-footer">
                    <hr className='m-1 w-100' />
                    <div className="social-media py-2">
                        <Link to=""><i className="bi bi-facebook fs-6"></i></Link>
                        <Link to="https://www.instagram.com/defendoofficial/reels/"><i className="bi bi-instagram fs-6"></i></Link>
                        <Link to=""><i className="bi bi-tiktok fs-6"></i></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavBar