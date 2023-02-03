import React from 'react'
import img from '../images/Update/img'

export default function Chat() {
    return (
        <>
            <a href="https://wa.me/+966566770235" target="_blank" rel="noopener noreferrer" id="msgBtn" className="position-fixed bottom-0 end-0 translate-middle text-white">
                {/* <i className="fa-solid fa-comment-dots fs-1 p-3 main-bg rounded-circle"></i> */}
                <img width={'100%'} height={'100%'} alt="whatsapp " src={img.whatsapp}  className="whatsapp shadow-lg"/>
            </a>
        </>
    )
}
