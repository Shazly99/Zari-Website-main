import React, { useEffect,useContext } from 'react'
import WOW from 'wowjs';
import { langContext } from '../../componants/context/store';
import img from '../../componants/images/Update/img';
import './ecommerse.scss'
const Ecommerse = () => {
    let { isEng } = useContext(langContext);
    useEffect(() => { 
            new WOW.WOW().init();
       
    }, [])  
    let data = [
        {  icons: img.icon1, textEn: 'Because we have 10 years of experience in website programming and online stores', textAr: 'لأننا نمتلك خبرة 10 سنين فى مجال برمجة المواقع و المتاجر الالكترونيه    ' },
        {  icons: img.icon2, textEn: 'Full Website Security and Security ', textAr: 'توفير الحماية والأمان الكامل للموقع الإلكتروني' },
        {  icons: img.icon3, textEn: 'Provide you with more than one form and form to choose from and also you can suggest an infinite number of modifications you want.', textAr: 'تزويدك بأكثر من شكل و نموذج للاختيار بينهم وأيضا يمكنك اقتراح عدد لانهائى من التعديلات التي تريدها. ' },
        {  icons: img.icon4, textEn: 'Providing you with content specific to your business at the highest level and by experts, through which you can outperform your competitors and also be compatible with search engines.', textAr: 'تزويدك بمحتوى خاص بنشاطك التجاري على اعلى مستوى و على يد خبراء، نمكنك من خلاله بالتفوق على منافسينك وايضاً يكون متوافق مع محركات البحث.' },
        {  icons: img.icon5, textEn: '24/7 technical support', textAr: 'دعم فني علي مدار الساعة 24/7 ' },
        {  icons: img.icon6, textEn: 'Provision of backups to ensure preservation of information ', textAr: 'توفير نسخ احتياطية لضمان الحفاظ على المعلومات' },
        {  icons: img.icon7, textEn: 'Provide a control panel in Arabic or English', textAr: '  توفير لوحة تحكم باللغة العربية او الانجليزية ' },
        {  icons: img.icon8, textEn: 'We configure search engines to improve your visibility and increase visits on your website to reach your customers with ease', textAr: 'نقوم بتهيئة محركات البحث لتحسين ظهورك وزيادة الزيارات على موقعك الإلكتروني لتصل الى عملائك بكل سهوله  ' },
        {  icons: img.icon9, textEn: 'Connect your site with your social media networks', textAr: 'ربط موقعك مع شبكات التواصل الاجتماعي الخاصة بك' },
    ]
    return (
        <div className='app__ecommerse overflow-hidden'>
            {/* header */}{/* style={{backgroundImage:`url(${img.img4})`}} */}
            <header id="productSingle" className="productSingle-page main-img-bg" dir={isEng ? 'ltr' : 'rtl'} >
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold " >{isEng ? 'E-commerse' : 'التجارة الالكترونية '}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* section 2 */}
            <div className="app__ecommerse__home container " dir={isEng ? 'ltr' : 'rtl'}>
                <div className=" row py-5  d-flex justify-content-center align-items-center">
                    <div className=" app__ecommerse__home-content col-lg-8 d-flex align-items-center  ">
                        <div className="develop wow fadeInLeft" data-wow-duration="1s">
                            {
                                isEng ?
                                    <>
                                        <h2 className="mb-4 main-color "  >Design and Development of Your Online Store</h2>
                                        <p>
                                            Creating a store or website has become an opportunity for stores and projects to reach many new customers and increase users' interaction.
                                            <br />
                                            With the Zara Solutions Agency, we will help you create and design your store or website at a standard time and at the highest level to reach your goals

                                        </p>
                                    </> :
                                    <>
                                        <h1 className="mb-4 main-color "  >
                                            تصميم و برمجة متجرك الالكترونى </h1>
                                        <p>إنشاء متجر أو موقع إلكتروني أصبح فرصة للمتاجر و المشاريع للوصول إلى العديد من العملاء الجدد وزيادة تفاعل المستخدمين.

                                            مع وكالة حلول زارى سنساعدك على إنشاء و تصميم متجرك أو موقعك الإلكتروني فى وقت قياسى وعلى أعلى مستوى للوصول الى أهدافك
                                        </p>
                                    </>

                            }
                        </div>
                    </div>
                    <div className="app__ecommerse__home-img col-lg-4 ">
                        <div className="develop-img wow fadeInRight" data-wow-duration="1s">
                            <img src={img.img5} className="w-100" alt="customization" />
                        </div>
                    </div>
                </div>

                <div className=" serviceSingle_first row py-5  d-flex justify-content-center align-items-center">
                    <div className="app__ecommerse__home-img col-lg-4 ">
                        <div className="develop-img wow fadeInLeft" data-wow-duration="1s">
                            <img src={img.icon10} className="w-100" alt="customization" />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>

                    <div className="app__ecommerse__home-content col-lg-7  d-flex align-items-center  ">
                        <div className="develop wow fadeInRight" data-wow-duration="1s">
                            {
                                isEng ?
                                    <>
                                        <h4 className="mb-4  main-color mt-5 "  >Why should you create a website or e-store for your project or store?</h4>

                                        <p>
                                            because it's an excellent way to offer your e-commerce business. where you can sell food, tools, design items, digital products, and malls. Zari E-commerce is extremely advanced to provide customers with the best purchasing experience and to assist you in creating a great website for shopping for your valued customers.This gives you a plethora of ready-to-use e-commerce web templates that you can easily incorporate into your website.It has all those modern features that allow you to design a network that truly represents your vision The product you offer, has dozens of different locations, appendices, slider patterns, great banner layouts, login screen and blog variety, and multiple language options. However, the best part is the ease of SEO because it means more work and more sales. We are always eager to add new features and will continue to update them as needed.You can choose and use certain components you find handy on your website, or you can also use the entire package on your e-commerce site.

                                        </p>
                                    </> :
                                    <>
                                        <h3 className="mb-4 fw-bolder main-color "  >
                                            لماذا  يجب إنشاء موقع أو متجر إلكتروني خاص بمشروعك أو متجرك؟
                                        </h3>

                                        <p>
                                            لأنها طريقة ممتازة لتقديم أعمال التجارة الإلكترونية الخاصة بك. حيث يمكنك بيع المواد الغذائية والأدوات وعناصر التصميم والمنتجات الرقمية والمراكز التجارية. تعتبر زاري للتجارة الإلكترونية متقدمة بشكل مذهل لمنح العملاء أفضل تجربة شراء و تساعدك ايضاً في إنشاء موقع ويب رائع لتجربة التسوق لعملائك الكرام. يوفر لك هذا كميات هائلة من قوالب الويب للتجارة الإلكترونية الجاهزة للاستخدام والتي يمكنك استخدامها بسهولة في  في شبكة الإنترنت الخاصة بك . يحتوي على كل تلك الميزات العصرية الحديثة التي تسمح لك بتصميم شبكة تمثل رؤيتك حقًامع المنتج الذى تقدمه ، لديك على طاولتك ، عشرات من المواقع المختلفة ، والتذييلات ، وأنماط شريط التمرير ، وتخطيطات لافتة رائعة ، وتنوعات شاشة تسجيل الدخول والمدونة ، وخيارات لغة متعددة. ومع ذلك ، فإن أفضل جزء هو سهولة تحسين محركات البحث لأنك تعني العمل والمزيد من المبيعات. نحن حريصون دائمًا على الاستمرار في إضافة المزيد من الميزات وسنواصل تحديثها من وقت لآخر. يمكنك اختيار واختيار مكونات معينة تجدها في متناول يديك على الويب الخاص بك ، أو يمكنك أيضًا استخدام الحزمة بأكملها في موقع التجارة الإلكترونية الخاص بك
                                        </p>

                                    </>

                            }
                        </div>
                    </div>

                </div>

                <div className="row d-flex justify-content-between  align-items-center">
                    <h2 className="text-center fs-1 mb-4 fw-bold main-color wow fadeInTop" data-wow-duration="1s">
                        {
                            isEng ?
                                'Benefits of Creating Your Online Store ' :
                                ` تصميم و برمجة متجرك الالكترونى`
                        }
                    </h2>

                    <div className="col-md-4  d-flex justify-content-center align-items-center  flex-column mt-3 wow fadeInLeft" data-wow-duration="1s">
                        <img src={img.img3} className='w-75' />
                        <p className="colorDevelop mt-1 h4   text-center">
                            {
                                isEng ? `Access to a new customer base  ` :
                                    `الوصول إلى قاعدة عملاء جديدة.`
                            }
                        </p>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center  align-items-center flex-column mt-3 wow bounceInUp" data-wow-duration="1.5s">
                        <img src={img.img2} className='w-75' />
                        <p className="colorDevelop mt-1 h4   text-center">
                            {
                                isEng ? `Increased sales and profits  ` :
                                    `زيادة المبيعات والارباح.`
                            }
                        </p>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center align-items-center flex-column mt-3 wow fadeInRight" data-wow-duration="1s">
                        <img src={img.img1} className='w-75' />
                        <p className="colorDevelop my-3 h4   text-center" >
                            {
                                isEng ? `Unlimited spread and keeping up with competitors in the market` :
                                    `انتشار غير محدود و مواكبة المنافسين فى السوق .`
                            }
                        </p>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center align-items-center flex-column mt-3 wow fadeInLeft" data-wow-duration="1.5s">
                        <img src={img.img7} className='w-75' />
                        <p className="colorDevelop my-3 h4   text-center" >
                            {
                                isEng ? `Get an online store and application in the name of your project.` :
                                    `الحصول على متجر إلكتروني وتطبيق باسم مشروعك`
                            }
                        </p>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center align-items-center flex-column mt-3 wow bounceInUp" data-wow-duration="1.5s">
                        <img src={img.img8} className='w-75' />
                        <p className="colorDevelop my-3 h4   text-center" >
                            {
                                isEng ? `Lower administrative costs ` :
                                    `تكاليف إدارية أقل
                                    .`
                            }
                        </p>
                    </div>
                    <div className="col-md-4  d-flex justify-content-center align-items-center flex-column mt-3 fadeInRight" data-wow-duration="1.5s">
                        <img src={img.img9} className='w-75' />
                        <p className="colorDevelop my-3 h4   text-center" >
                            {
                                isEng ? `You can enter other merchants with you on your website and take a percentage of them` :
                                    `يمكنك إدخال تجار آخرين معك فى موقعك الإلكترونى و أخذ نسبة منهم.`
                            }
                        </p>
                    </div>

                </div>


                <div className='container-fluid '  >
                    <div className="position-relative flex-column    d-flex justify-content-center mt-5   align-items-center">
                        <span className=' wow fadeInDownBig header-span text-center py-2 m-0 p-0 wow slideInTop' data-wow-duration="1s" >
                            {
                                isEng ? ` Why should you work with Zari Solutions?` : `لماذا  تختار حلول زارى؟`

                            }
                        </span>
                        <div className='header-span-overlay '></div>
                        <div className="row text-main ">

                            {
                                data?.map((item, index) => {
                                    return (
                                        <div key={index} className='mt-5 col-md-6 services__col'>
                                            <div className="text-bg rounded-3 shadow wow fadeInRight" data-wow-duration="1.5s"  >
                                                <div className="icon " >
                                                    <img src={item.icons}  />
                                                </div>
                                                <div className="content  h-100 text-bg2 ">
                                                    {/* <h4 style={{ fontSize: '24px' }} className='text-dark h2'>{isEng ? item.headerEn : item.headerAr}</h4> */}
                                                    <p>{isEng ? item.textEn : item.textAr}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ecommerse
