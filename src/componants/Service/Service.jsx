import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { langContext } from '../context/store';
import $ from 'jquery';
import { useState } from 'react';
import axios from 'axios';
import img from '../images/Update/img';
// import collaboration from '../images/services/Live collaboration-pana 1.png';


export default function Service({ baseURL, showNameEn, showNameAr, showTypeEn, showTypeAr }) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    useEffect(() => {
        $('.services-link').addClass('active');

        return () => {
            $('.services-link').removeClass('active');
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            new WOW.WOW().init();
        }, 1000);
    }, [])


    // Service data  
    const { id } = useParams();
    const [fetchServiceData, setFetchServiceData] = useState(null);

    useEffect(() => {

        axios.get(`${baseURL}service/${id}`)
            .then($('.dropdown.services-toggle .dropdown-menu').addClass('d-none'))
            .then((res) => {
                setFetchServiceData(res.data);
                $('.dropdown.services-toggle .dropdown-menu').removeClass('d-none');
            })
    }, [id]);


    let { isEng } = useContext(langContext);

    let data = [
        { img: img.icon14, headerEn: 'Idea Stage', bodyEn: 'We develop the idea to make it an integrated product', headerAr: 'مرحلة الفكرة', bodyAr: 'نقوم بتطوير الفكرة لجعلها منتج متكامل.' },
        { img: img.icon11, headerEn: 'Data Analysis Stage', bodyEn: 'We analyze market data, study competitors and find the best ways to develop the idea', headerAr: 'مرحلة تحليل البيانات', bodyAr: 'نقوم بتحليل بيانات السوق ودراسة المنافسين وايجاد افضل طرق لتطوير الفكرة' },
        { img: img.icon17, headerEn: 'Qualifying Stage ', bodyEn: `At this point, we divide your project into agreed points. So that your project is clear before it begins to be implemented at the highest level as we operate the advanced Agile system`, headerAr: 'مرحلة التأهيل', bodyAr: `في هذه المرحلة نقوم بتقسيم مشروعك الى نقاط متفق عليها حتى يكون مشروعك واضح قبل البدء فى تنفيذه على أعلى مستوى حيث اننا نعمل بنظام اجايل المتطور` },
        { img: img.icon12, headerEn: 'Design Stage', bodyEn: 'App design is not just a form but a complete study of how users think while using the app.', headerAr: 'مرحلة التصميم', bodyAr: `تصميم التطبيقات ليس مجرد شكل بل هو عبارة عن دراسة كاملة لطريقة تفكير المستخدمين أثناء استخدامهم للتطبيق.` },
        { img: img.icon16, headerEn: 'Programming Stage', bodyEn: 'All our apps run with the latest software technology and latest versions to ensure the app works longer.', headerAr: 'مرحلة البرمجة', bodyAr: `جميع التطبيقات لدينا تعمل بأحدث التقنيات البرمجية واخر الاصدارات لضمان عمل التطبيق لفترة أطول.` },
        { img: img.icon13, headerEn: 'Experimental Stage', bodyEn: 'The application is checked and tested by specialists in this field in addition to using special servers for inspection.', headerAr: 'مرحلة التجربة', bodyAr: `يتم فحص التطبيق وتجربته من قبل مختصين بهذا المجال بالإضافة إلى استخدام سيرفرات خاصة للفحص.` },
        { img: img.icon18, headerEn: 'Application Deployment Stage', bodyEn: 'Our team publishes the app on Google Store', headerAr: 'مرحلة نشر التطبيق', bodyAr: `يقوم فريق العمل لدينا بنشر التطبيق على متجر جوجل` },
        { img: img.icon15, headerEn: 'Marketing Stage', bodyEn: 'We have the best team specializing in marketing apps and communicating the idea in a way that suits the work of the app', headerAr: 'مرحلة التسويق', bodyAr: `لدينا أفضل فريق متخصص بتسويق التطبيقات وايصال الفكرة بالطريقة التي تناسب عمل التطبيق` },
    ]


    return fetchServiceData !== null ? (<>

        {/* header */}{/* style={{ backgroundImage: `url(${img.img4})` }} */}
        <header id="serviceSingle" className="serviceSingle-page main-img-bg" dir={isEng ? 'ltr' : 'rtl'} >
            <div className="total-header layer-img d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                        <h2 className="fs-1 text-white fw-bold text-center" >{isEng ? fetchServiceData.service.header : fetchServiceData.service.headerAr}</h2>
                    </div>
                </div>
            </div>
        </header>

        {/* serviceSingle */}
        {
            id === '2' ?
                <>
                    <section className="serviceSingle py-5" dir={isEng ? 'ltr' : 'rtl'}>
                        <div className="container">
                            <div className=" serviceSingle_first row gx-0 gy-4 d-flex justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <div className="caption-wd-page wow fadeInRight" data-wow-duration="1s">
                                        <h3 className="serviceSingle__header mb-3   wow fadeInDownBig w-100" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Design And Development Of Phone Applications' : '  تصميم وتطوير تطبيقات الهاتف'}</h3>
                                        <p>
                                            {
                                                isEng ? `We design and develop phone applications according to the most important criteria that serve the idea of the application and its development in its entirety, from the idea to the launch and continuous support.` : `نعمل على تصميم وتطوير تطبيقات الهاتف حسب أهم المعايير التي تخدم فكرة التطبيق وتطويره بالكامل، من الفكرة إلى الانطلاق والدعم المستمر.
                                                `
                                            }
                                        </p>

                                        <p>
                                            {
                                                isEng ? `Also at Zari we work with the latest and most complex technologies to deliver the best applications technologically that increase users interaction as you can see this in every aspect of the app both in terms of design and in terms of the app interaction with the user.` : `ايضاً نحن في زاري نعمل بأحدث وأكثر التقنيات تعقيداً لتقديم أفضل التطبيقات من الناحية التكنولوجية التي تزيد تفاعل المستخدمين حيث يمكنك ملاحظة ذلك في كل جانب من جوانب التطبيق سواء من ناحية التصميم او ناحية تفاعل التطبيق مع المستخدم.`
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="img-page text-center wow fadeInLeft " data-wow-duration="1s">
                                        <img src={fetchServiceData.service.image} className="w-75 mx-auto" alt="website design" />
                                    </div>
                                </div>
                            </div>

                            <div className="row gx-0 gy-4 d-flex justify-content-center    align-items-center">
                                <div className="col-lg-6">
                                    <div className="img-page slideInLeft  text-center wow fadeInLeft" data-wow-duration="1s">
                                        <img src={img.mobile} className="w-75 mx-auto" alt="website design" />
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div className="caption-wd-page wow  fadeInRight" data-wow-duration="1s">
                                        <h3 className="serviceSingle__header mb-3 wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Mobile Creation and Development' : 'إنشاء وتطوير الجوال'}</h3>
                                        <p className='serviceSingle__body'>
                                            {
                                                isEng ? `Creating a mobile app can help businesses interact with clients more effectively, enhance the customer experience, and boost sales and profits. Additionally, a well-made and simple-to-use mobile app can be a useful marketing tool that aids businesses in attracting new clients and keeping hold of current ones.` : `إنشاء تطبيق للجوال يساعد الشركات على التواصل بشكل أفضل مع عملائها، وتحسين تجربة العملاء، وزيادة المبيعات والإيرادات. بالإضافة إلى ذلك، يمكن أن يكون تطبيق الهاتف المحمول المصمم جيدًا وسهل الاستخدام بمثابة أداة تسويق قيمة يمكن أن تساعد الشركات في الوصول إلى عملاء جدد والاحتفاظ بالعملاء الحاليين.                                                `
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='container-fluid '  >
                            <div className="position-relative flex-column    d-flex justify-content-center mt-5   align-items-center">
                                <span className=' wow fadeInDownBig header-span text-center py-2 m-0 p-0' data-wow-duration="1s" data-wow-delay="0.5s" >
                                    {
                                        isEng ? `The design and development of mobile applications includes several stages` : `يتضمن تصميم وتطوير تطبيقات الهاتف المحمول عدة مراحل`
                                    }
                                </span>
                                <div className='header-span-overlay '></div>
                                <div className="row ">


                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <div key={index} className='mt-5 col-md-6 services__col '>
                                                    <div className="text-bg shadow rounded-3  wow fadeInRight" data-wow-duration="1.5s"  >
                                                        <div className="icon " >
                                                            <img src={item.img} />
                                                        </div>
                                                        <div className="content">
                                                            <h4 style={{ fontSize: '24px' }} className='  text-servies h2'>{isEng ? item.headerEn : item.headerAr}</h4>
                                                            <p>{isEng ? item.bodyEn : item.bodyAr}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                :
                <>
                    <section className="serviceSingle py-5" dir={isEng ? 'ltr' : 'rtl'}>
                        <div className="container">
                            <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <div className="caption-wd-page wow fadeInRight" data-wow-duration="1s">
                                        <h3 className="fw-bold mb-3 fs-2 wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchServiceData.service.title : fetchServiceData.service.titleAr}</h3>
                                        <h5 className="mb-3 main-color fw-bold wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchServiceData.service.title === fetchServiceData.service.subtitle ? '' : fetchServiceData.service.subtitle : fetchServiceData.service.titleAr === fetchServiceData.service.subtitleAr ? '' : fetchServiceData.service.subtitleAr}</h5>
                                        <p className="mb-3 py-1 text-black wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchServiceData.service.text : fetchServiceData.service.textAr}
                                        </p>
                                        <div className="headings wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                            {isEng ? fetchServiceData.service.features.map((item, i) => (
                                                <h5 key={i}><span className='mr-span'><i className="fa-solid fa-check"></i></span>{item}</h5>
                                            )) : fetchServiceData.service.featuresAr.map((itemAr, i) => (
                                                <h5 key={i}><span className='ml-span'><i className="fa-solid fa-check"></i></span>{itemAr}</h5>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="img-page text-center wow fadeInLeft" data-wow-duration="1s">
                                        <img src={fetchServiceData.service.image} className="w-75 mx-auto" alt="website design" />
                                    </div>
                                </div>
                            </div>
                            <div className="buttons text-center mt-4 wow fadeInUpBig">
                                <Link to="../order" onClick={() => {
                                    showNameEn(fetchServiceData.service.header)
                                    showNameAr(fetchServiceData.service.headerAr)
                                    showTypeEn('Service')
                                    showTypeAr('خدمـــة')
                                }} className="btn black-btn px-5" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Contact Us' : 'تواصل معنا'}</Link>
                            </div>
                        </div>
                    </section>

                    {/* we like to start ur project with us */}
                    <section className="start-ur-project py-5 mb-5" dir={isEng ? 'ltr' : 'rtl'}>
                        <div className="container">
                            <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
                                <div className="col-lg-5">
                                    <div className="img-page text-center wow fadeInLeft" data-wow-duration="1s">
                                        <img src={fetchServiceData.footer.image}
                                            className="w-100 mx-auto" alt="Live collaboration" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="question-title wow fadeInRight" data-wow-duration="1s">
                                        <h4 className="fw-bold mb-3 fs-2 main-color wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchServiceData.footer.header : fetchServiceData.footer.headerAr}</h4>
                                        <p className="mb-4 py-1 lh-base text-black-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchServiceData.footer.text : fetchServiceData.footer.textAr}</p>
                                        <div className="buttons wow fadeInUpBig" data-wow-duration="1s">
                                            <Link to="../Contact" className="btn black-btn py-3 px-5">{isEng ? 'Send Message' : 'إرســـال رسـالـــة'}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
        }
    </>) : (
        <div id="ready">
            <i className="fa fa-spinner fa-5x fa-spin"></i>
        </div>
    )
}
