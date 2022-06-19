import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
    return (
        <div>
            <div className={`footer ${props.no_spacing ? '' : 'mt-5'}`}>
                <div className="contain">
                    <div className="grid_4">
                        <div className="main_div">
                            <h5>SabiBook</h5>
                            <p>
                                Level Up Your Design Skills. Explore new ways to elevate your artwork in Adobe
                                Illustrator with designer Sophia Yeshi. Teach what you know and help learners explore
                                their interests, gain new skills, and advance their careers.</p>
                        </div>
                        <div className="main_div">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main_div">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main_div">
                            <h5>Social</h5>
                            <div>
                                <div className="icons_cover">
                                    <div className="footer_social_icons_cover">
                                        <ion-icon
                                            class="icons_dash"
                                            name="logo-twitter"></ion-icon>
                                    </div>
                                    <div className="footer_social_icons_cover">
                                        <ion-icon
                                            class="icons_dash"
                                            name="logo-linkedin"></ion-icon>
                                    </div>
                                    <div className="footer_social_icons_cover">
                                        <ion-icon
                                            class="icons_dash"
                                            name="logo-medium"></ion-icon>
                                    </div>
                                    <div className="footer_social_icons_cover">
                                        <ion-icon
                                            class="icons_dash"
                                            name="logo-github"></ion-icon>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <a href="tel:08132277316">0813 227 7316</a>
                                    </div>
                                    <div>
                                        <a href="mailTo:eadelekeife@gmail.com">eadelekeife@gmail.com</a>
                                    </div>
                                    <div>
                                        <a href="mailTo:eadelekeife@gmail.com">4, Odogbolu street, Ikoyi Lagos state.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;