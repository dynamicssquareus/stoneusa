import React from 'react';
import { useRouter } from 'next/router';
import FooterContactForm from './FooterContactForm';
import FormSubscribe from './FormSubscribe';
import ScrollToTopButton from './ScrollToTopButton';
import Image from 'next/image';
Image

const Footer = ({ faq }) => {
    const router = useRouter();
    const { pathname } = router;

    // Define classes based on different routes
    let footerClass = '';

    if (pathname === '/contact-us' || pathname === '/about-us' || pathname === '/thank-you' || pathname === '/get-quote-now' || pathname === '/catalog-download' || pathname === '/tombstones-monuments') {
        footerClass = 'footer-pad';
    }
    // } else if (pathname === '/page2') {
    //   footerClass = 'page2-footer';
    // } else if (pathname === '/page3') {
    //   footerClass = 'page3-footer';
    // }

    return (
        <>
            <FooterContactForm faq={faq} />
            <div className='footer-subscriber m-t-80'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='subsc-head'>
                                <div className='sub-it'>
                                    <p>Sales and Support:</p>
                                    <span>+1 (858) 293-5368</span>
                                </div>
                                <div className='sub-it'>
                                    <p>Or Mail us at:</p>
                                    <span>info@stonediscover.com</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-lg-6 align-self-center'>
                            <div className='subsc-head-right'>

                                <div className='subsc-head-right-l'>
                                    <h4>Subscribe Us for Offers</h4>
                                </div>
                                <div className='subsc-head-right-r'>
                                    <FormSubscribe />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <footer id="footer" className="footer">
                <div className={`footer-top ${footerClass}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-4 col-md-12 footer-info">
                                <a href="/" className="logo d-flex align-items-center">
                                    <Image src="/stone-logo.png" alt="stone-logo" width={200} height={30} />
                                    {/* <span>FlexStart</span> */}
                                </a>
                                <p>Stone Discover is a direct manufacturer and wholesale exporter of premium granite monuments from India — supplying memorial dealers, funeral homes, and cemetery suppliers across the USA, Canada, Australia, and Europe since 1984. Factory-direct. ISO 9001 certified. No middlemen.</p>
                                <div className="social-links mt-3">
                                    <a href="https://www.linkedin.com/company/stonediscover/" className="linkedin" target='_blank'><i className="bi bi-linkedin"></i></a>
                                    <a href="https://in.pinterest.com/stone_discover_india/" className="facebook" target='_blank'><i className="bi bi-pinterest"></i></a>
                                    <a href="https://www.instagram.com/stone_discover/" className="instagram" target='_blank'><i className="bi bi-instagram"></i></a>

                                </div>
                            </div>
                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Company</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/about-us/">About us</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/tombstones-monuments/">Monuments</a></li>
                                      <li><i className="bi bi-chevron-right"></i> <a href="/headstones/">Headstone</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/photo-gallery/">Photo Gallery</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/blog/">Blogs</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/contact-us/">Contact Us</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/terms-of-use/">Terms of service</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/privacy-policy/">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Our Products</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/headstones/angel/">Angel Headstone</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/headstones/book/">Book Headstones</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/tombstones-monuments/columbarium/">Columbarium</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/headstones/flat/">Flat Marker</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/headstones/vases/">Headstone Vases</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/tombstones-monuments/kerb-sets/">Kerb Sets</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="/tombstones-monuments/bench/">Memorial Bench</a></li>
                                </ul>



                            </div>
                            <div className="col-lg-4 col-md-12 footer-contact  text-md-start">
                                <h4>Useful info</h4>
                                <p><b>Office:</b> 1116, JMD Megapolis, Sector 48, Gurugram, Haryana 122018.</p>
                                <p><b>Factory:</b> SY.No.33, Alinagar, Chetlapotham Village, Jinaram-Mandal, Sangareddy, Telangana 502319.</p>
                                <p><b>Customer Support & Sales(India):</b> <a href="tel:919667584700">+91 966 758 4700</a></p>
                                <p><b>Customer Support & Sales(USA):</b> <a href="tel:18582935368">+1 858 293 5368</a></p>
                                <p><b>Email:</b> <a href="mailto:info@stonediscover.com">info@stonediscover.com</a></p>
                                <p><b>Working Time:</b> Mon-Sat: 8 AM - 5 PM</p>
                                {/* <FormSubscribe /> */}
                            </div>

                        </div>
                    </div>

                </div>
                <div className='bottom-footer'>
                    <div className="container">
                        <div className="copyright">© Copyright 2026 Stone Discover, Inc. All rights reserved. Various trademarks held by their respective owners.</div>
                    </div>
                </div>
            </footer>
            <ScrollToTopButton />
        </>
    );
}

export default Footer;
