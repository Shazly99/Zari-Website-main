import React from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import imgNotFound from '../images/404 Error Page not Found.png';
import $ from 'jquery';


export default function Notfound() {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
        $('.nav-item a').removeClass('active');
    }, []);

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    return (
            <>

                {/* header */}
                <header id="notfound" className="notfound-page">
                    <div className="bg-light">
                        <div className="container">
                            <div className="img-notfound min-vh-70 d-flex align-items-center">
                                <img src={imgNotFound} className="w-50 mx-auto" alt="img-not-found"/>
                            </div>
                        </div>
                    </div>
                </header>
            </>
    )
}