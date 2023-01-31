import React, { useContext } from 'react';
import imgLogo from '../images/logo w 1.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { langContext } from '../context/store';
import { useEffect } from 'react';
import $ from 'jquery';
import WOW from 'wowjs';



export default function Navbar({ fetchNav, fetchProjects, fetchProducts }) {


    useEffect(() => {

        new WOW.WOW().init();

    }, [])


    const [isActive, setActive] = useState(false);

    const handelClick = () => {
        setActive(!isActive);
    }

    let { isEng, changeLang } = useContext(langContext);


    const changeLink = () => {
        if ($('.caption-details h2').text() === fetchProjects[0].title || $('.caption-details h2').text() === fetchProjects[0].titleAr) {
            if (isEng === false && $('.caption-details h2').text() === fetchProjects[0].title) {
                $('.caption-details p').text(fetchProjects[0].text);
            }
            else {
                $('.caption-details p').text(fetchProjects[0].textAr);
            }
            $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[0].id}`);
        }

        // else if ($('.caption-details h2').text() === fetchProjects[1].title || $('.caption-details h2').text() === fetchProjects[1].titleAr) {
        //     if(isEng === false && $('.caption-details h2').text() === fetchProjects[1].title) {
        //         $('.caption-details p').text(fetchProjects[1].text);
        //     }
        //     else{
        //         $('.caption-details p').text(fetchProjects[1].textAr);
        //     }
        //     $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[1].id}`);
        // }

        // else if ($('.caption-details h2').text() === fetchProjects[2].title || $('.caption-details h2').text() === fetchProjects[2].titleAr) {
        //     if(isEng === false && $('.caption-details h2').text() === fetchProjects[2].title) {
        //         $('.caption-details p').text(fetchProjects[2].text);
        //     }
        //     else{
        //         $('.caption-details p').text(fetchProjects[2].textAr);
        //     }
        //     $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[2].id}`);
        // }

        // else if ($('.caption-details h2').text() === fetchProjects[3].title || $('.caption-details h2').text() === fetchProjects[3].titleAr) {
        //     if(isEng === false && $('.caption-details h2').text() === fetchProjects[3].title) {
        //         $('.caption-details p').text(fetchProjects[3].text);
        //     }
        //     else{
        //         $('.caption-details p').text(fetchProjects[3].textAr);
        //     }
        //     $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[3].id}`);
        // }
    }



    const productsArray = [];

    if (fetchProducts[0]) {
        fetchProducts[0].map((productItem) => {
            productsArray.push(productItem);
        });
    }

    if (fetchProducts[1]) {
        fetchProducts[1].map((productItem) => {
            productsArray.push(productItem);
        });
    }

    if (fetchProducts[2]) {
        fetchProducts[2].map((productItem) => {
            productsArray.push(productItem);
        });
    }

    if (fetchProducts[3]) {
        fetchProducts[3].map((productItem) => {
            productsArray.push(productItem);
        });
    }

    if (fetchProducts[4]) {
        fetchProducts[4].map((productItem) => {
            productsArray.push(productItem);
        });
    }


    const changeText = () => {
        if (isEng) {
            $('.bg-black .row').attr('dir', 'rtl');
            $('.bg-black .row .caption-details-products').addClass('text-end');
            $('.bg-black .row .caption-details-products').removeClass('text-start');
            if (productsArray[0]) {
                $('.bg-black .row .caption-details-products h2.one').text(productsArray[0].titleAr);
                $('.bg-black .row .caption-details-products p.one').text(productsArray[0].textAr);
            }
            if (productsArray[1]) {
                $('.bg-black .row .caption-details-products h2.two').text(productsArray[1].titleAr);
                $('.bg-black .row .caption-details-products p.two').text(productsArray[1].textAr);
            }
            if (productsArray[2]) {
                $('.bg-black .row .caption-details-products h2.three').text(productsArray[2].titleAr);
                $('.bg-black .row .caption-details-products p.three').text(productsArray[2].textAr);
            }
            if (productsArray[3]) {
                $('.bg-black .row .caption-details-products h2.four').text(productsArray[3].titleAr);
                $('.bg-black .row .caption-details-products p.four').text(productsArray[3].textAr);
            }
            if (productsArray[4]) {
                $('.bg-black .row .caption-details-products h2.five').text(productsArray[4].titleAr);
                $('.bg-black .row .caption-details-products p.five').text(productsArray[4].textAr);
            }
            if (productsArray[5]) {
                $('.bg-black .row .caption-details-products h2.six').text(productsArray[5].titleAr);
                $('.bg-black .row .caption-details-products p.six').text(productsArray[5].textAr);
            }
            if (productsArray[6]) {
                $('.bg-black .row .caption-details-products h2.seven').text(productsArray[6].titleAr);
                $('.bg-black .row .caption-details-products p.seven').text(productsArray[6].textAr);
            }
            if (productsArray[7]) {
                $('.bg-black .row .caption-details-products h2.eight').text(productsArray[7].titleAr);
                $('.bg-black .row .caption-details-products p.eight').text(productsArray[7].textAr);
            }
            if (productsArray[8]) {
                $('.bg-black .row .caption-details-products h2.nine').text(productsArray[8].titleAr);
                $('.bg-black .row .caption-details-products p.nine').text(productsArray[8].textAr);
            }
            if (productsArray[9]) {
                $('.bg-black .row .caption-details-products h2.ten').text(productsArray[9].titleAr);
                $('.bg-black .row .caption-details-products p.ten').text(productsArray[9].textAr);
            }
            if (productsArray[10]) {
                $('.bg-black .row .caption-details-products h2.eleven').text(productsArray[10].titleAr);
                $('.bg-black .row .caption-details-products p.eleven').text(productsArray[10].textAr);
            }
            if (productsArray[11]) {
                $('.bg-black .row .caption-details-products h2.twelve').text(productsArray[11].titleAr);
                $('.bg-black .row .caption-details-products p.twelve').text(productsArray[11].textAr);
            }
            $('.bg-black .row .caption-details-products a').text('اقـرأ المزيــد');
        }
        else {
            $('.bg-black .row').attr('dir', 'ltr');
            $('.bg-black .row .caption-details-products').addClass('text-start');
            $('.bg-black .row .caption-details-products').removeClass('text-end');
            if (productsArray[0]) {
                $('.bg-black .row .caption-details-products h2.one').text(productsArray[0].title);
                $('.bg-black .row .caption-details-products p.one').text(productsArray[0].text);
            }
            if (productsArray[1]) {
                $('.bg-black .row .caption-details-products h2.two').text(productsArray[1].title);
                $('.bg-black .row .caption-details-products p.two').text(productsArray[1].text);
            }
            if (productsArray[2]) {
                $('.bg-black .row .caption-details-products h2.three').text(productsArray[2].title);
                $('.bg-black .row .caption-details-products p.three').text(productsArray[2].text);
            }
            if (productsArray[3]) {
                $('.bg-black .row .caption-details-products h2.four').text(productsArray[3].title);
                $('.bg-black .row .caption-details-products p.four').text(productsArray[3].text);
            }
            if (productsArray[4]) {
                $('.bg-black .row .caption-details-products h2.five').text(productsArray[4].title);
                $('.bg-black .row .caption-details-products p.five').text(productsArray[4].text);
            }
            if (productsArray[5]) {
                $('.bg-black .row .caption-details-products h2.six').text(productsArray[5].title);
                $('.bg-black .row .caption-details-products p.six').text(productsArray[5].text);
            }
            if (productsArray[6]) {
                $('.bg-black .row .caption-details-products h2.seven').text(productsArray[6].title);
                $('.bg-black .row .caption-details-products p.seven').text(productsArray[6].text);
            }
            if (productsArray[7]) {
                $('.bg-black .row .caption-details-products h2.eight').text(productsArray[7].title);
                $('.bg-black .row .caption-details-products p.eight').text(productsArray[7].text);
            }
            if (productsArray[8]) {
                $('.bg-black .row .caption-details-products h2.nine').text(productsArray[8].title);
                $('.bg-black .row .caption-details-products p.nine').text(productsArray[8].text);
            }
            if (productsArray[9]) {
                $('.bg-black .row .caption-details-products h2.ten').text(productsArray[9].title);
                $('.bg-black .row .caption-details-products p.ten').text(productsArray[9].text);
            }
            if (productsArray[10]) {
                $('.bg-black .row .caption-details-products h2.eleven').text(productsArray[10].title);
                $('.bg-black .row .caption-details-products p.eleven').text(productsArray[10].text);
            }
            if (productsArray[11]) {
                $('.bg-black .row .caption-details-products h2.twelve').text(productsArray[11].title);
                $('.bg-black .row .caption-details-products p.twelve').text(productsArray[11].text);
            }
            $('.bg-black .row .caption-details-products a').text('Read More');

        }
    }


    const closeNavbar = () => {
        if (isActive === true && $('body, html').width() < 992) {
            setActive(!isActive)
            $('.navbar .navbar-toggler').attr('aria-expanded', 'false');
            $('.navbar .collapse').removeClass('show')
        }
    }


    function changeDir() {
        let width = $('body').width()
        if (isEng === false) {

            $('.language i').css({ 'marginRight': '0', 'marginLeft': '6px' });

            if (width > 992) {
                $('.dropdown .dropdown-menu').css({ 'right': '0', 'left': 'auto' });
            }
        }

        else {

            $('.language i').css({ 'marginRight': '6px', 'marginLeft': '0' });

            if (width > 992) {
                $('.dropdown .dropdown-menu').css({ 'left': '0', 'right': 'auto' });
            }
        }
    }

    useEffect(() => {
        changeDir();

        return () => {
            changeDir();
        }
    }, [isEng]);


    $(window).on('resize', function () {
        changeDir();
    });


    // const delay = {
    //     0: '0.15s',
    //     1: '0.3s',
    //     2: '0.45s',
    //     3: '0.6s',
    //     4: '0.75s',
    //     5: '0.9s',
    //     6: '1.05s',
    //     7: '1.2s',
    //     8: '1.35s',
    //     9: '1.5s',
    //     10: '1.65s',
    //     11: '1.8s',
    //     12: '1.95s',
    //     13: '2.1s',
    //     14: '2.25s',
    // }



    return (

        <>
            <nav className="navbar navbar-expand-lg bg-nav fixed-top py-2" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container-fluid container-xl special-w">
                    <span className="navbar-brand"><img src={imgLogo} alt="zari logo" /></span>
                    <button className={`navbar-toggler wow fadeInUp ${isActive ? 'convert' : null}`} data-wow-duration="0.75s" onClick={handelClick} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav ${isEng ? 'me-auto' : 'ms-auto'} mb-2 mb-lg-0 ${isEng ? 'ms-0 ms-lg-3' : 'me-0 me-lg-3'} py-3 py-lg-0 fw-bold`}>
                            <li className="nav-item">
                                <NavLink onClick={closeNavbar} className="nav-link home" aria-current="page" to="home">{isEng ? 'Home' : 'الرئيسيــة'}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={closeNavbar} className="nav-link about" to="about">{isEng ? 'About' : 'من نحـن'}</NavLink>
                            </li>
                            <li className="nav-item dropdown services-toggle">
                                <NavLink onClick={closeNavbar} className="nav-link dropdown-toggle services-link" to="services" role="button"
                                    aria-expanded="false">
                                    {isEng ? 'Services' : 'الخدمـات'}
                                </NavLink>
                                <ul className="dropdown-menu">
                                    {Object.keys(fetchNav).length > 0 ? fetchNav.services.map((service, i) => (
                                        <li key={i}><Link onClick={closeNavbar} className={`dropdown-item ${isEng ? 'text-en' : 'text-ar'}`} to={service.route}>{isEng ? service.title : service.titleAr}</Link></li>
                                    )) : ''}
                                </ul>
                            </li>
                            <li className="nav-item dropdown products-toggle">
                                <NavLink onClick={closeNavbar} className="nav-link dropdown-toggle products-link" to="products" role="button"
                                    aria-expanded="false">
                                    {isEng ? 'Products' : 'المنتجــات'}
                                </NavLink>
                                <ul className="dropdown-menu">
                                    {Object.keys(fetchNav).length > 0 ? fetchNav.products.map((product, i) => (
                                        <li key={i}><Link onClick={closeNavbar} className={`dropdown-item ${isEng ? 'text-en' : 'text-ar'}`} to={product.route}>
                                            {isEng ? product.title === "E-Commerce" ? 'E-Commerce' : product.title : product.titleAr === "التجارة الالكترونية" ? "التجارة الالكترونية" : product.titleAr}
                                        </Link></li>
                                    )) : ''}
                                </ul>
                            </li>
                            <li className="nav-item dropdown projects-toggle">
                                <NavLink onClick={closeNavbar} className="nav-link dropdown-toggle projects-link" to="projects" role="button"
                                    aria-expanded="false">
                                    {isEng ? 'Projects' : 'المشـاريـع'}
                                </NavLink>
                                <ul className="dropdown-menu">
                                    {Object.keys(fetchNav).length > 0 ? fetchNav.projects.map((project, i) => (
                                        <li key={i}><Link onClick={closeNavbar} className={`dropdown-item ${isEng ? 'text-en' : 'text-ar'}`} to={project.route}>{isEng ? project.title : project.titleAr}</Link></li>
                                    )) : ''}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={closeNavbar} className="nav-link previous" to="previous">{isEng ? 'Works' : 'الأعمــال'}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={closeNavbar} className="nav-link" to="share">{isEng ? 'Share your project' : 'شارك مشروعــك'}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={closeNavbar} className="nav-link join" to="join">{isEng ? 'Join Us' : 'إنضـم إلينــا'}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={closeNavbar} className="nav-link contact" to="contact">{isEng ? 'Contact Us' : 'تواصل معنــا'}</NavLink>
                            </li>
                        </ul>
                        <div className="custome d-flex justify-content-center align-items-center pb-4 pb-lg-0">
                            <div className="language py-2" onClick={() => {
                                changeLang();
                                changeLink();
                                changeText();
                                closeNavbar();
                            }}>
                                <i className="fa-solid fa-globe fs-6"></i>
                                <button className='py-1'>{isEng ? 'العـربـيــة' : 'English'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
