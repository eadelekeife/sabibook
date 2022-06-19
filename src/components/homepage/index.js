import "../../assets/css/homepage.css";

import React from 'react';
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Controller, useForm } from "react-hook-form";

import LangMobile_1 from "../../assets/images/homepage/langmobile_1.png";
import LangMobile_2 from "../../assets/images/homepage/langmobile_2.png";
import LangMobile_3 from "../../assets/images/homepage/langmobile_3.webp";
import ManSmiling from "../../assets/images/homepage/man_smiling.png";

import Apple from "../../assets/images/icons/apple.svg";
import Hand from "../../assets/images/icons/hand.svg";
import Bag from "../../assets/images/icons/bag.svg";

import Nav from '../../common_files/nav';
import Footer from '../../common_files/footer';


const Homepage = () => {
    const { control, handleSubmit } = useForm({});
    return (
        <div>
            <Nav />
            <div className="hero_section">
                <div className="hero_content">
                    <div className="contain">
                        <h3>Unlimited access to 150+ instructors. New classes added every month.</h3>
                        <p>
                            Level Up Your Design Skills. Explore new ways to elevate your artwork in Adobe
                            Illustrator with designer Sophia Yeshi. Teach what you know and help learners explore
                            their interests, gain new skills, and advance their careers.</p>
                        <Link to="/" className="mr-1 btn_bg_yellow">Get access to courses</Link>
                        <Link to="/" className="btn_border_yellow">Frequently Asked Questions</Link>
                    </div>
                </div>
                <div className="hero_bg">

                </div>
            </div>
            <div className="sabi_props mt-5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <h3>Unlimited access to 150+ instructors. New classes added every month.</h3>
                            <Link to="/">Check all links <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                        </div>
                        <p>
                            Level Up Your Design Skills. Explore new ways to elevate your artwork in Adobe
                            Illustrator with designer Sophia Yeshi. Teach what you know and help learners explore
                            their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className="grid_4">
                        <div className="props_block blue">
                            <div>
                                <img src={LangMobile_1} alt="langmobile" />
                            </div>
                            <div>
                                <div className="grid_flex no_space">
                                    <img src={Apple} alt="bag" />
                                    <h4>Online Courses</h4>
                                </div>
                            </div>
                        </div>
                        <div className="props_block pink">
                            <div>
                                <img src={LangMobile_2} alt="langmobile" />
                            </div>
                            <div>
                                <div className="grid_flex no_space">
                                    <img src={Hand} alt="bag" />
                                    <h4>Physical Courses</h4>
                                </div>
                            </div>
                        </div>
                        <div className="props_block yellow">
                            <div>
                                <img src={LangMobile_3} alt="langmobile" />
                            </div>
                            <div>
                                <div className="grid_flex no_space">
                                    <img src={Bag} alt="bag" />
                                    <h4>Summer Camps</h4>
                                </div>
                            </div>
                        </div>
                        <div className="props_block red">
                            <div>
                                <img src={LangMobile_3} alt="langmobile" />
                            </div>
                            <div>
                                <div className="grid_flex no_space">
                                    <img src={Bag} alt="bag" />
                                    <h4>Summer Camps</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sabi_users bg_black mt-5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <h3>Unlimited access to 150+ instructors. New classes added every month.</h3>
                            <p>
                                Level Up Your Design Skills. Explore new ways to elevate your artwork in Adobe
                                Illustrator with designer Sophia Yeshi. Teach what you know and help learners explore
                                their interests, gain new skills, and advance their careers.</p>
                            <Link to="/" className="mr-1 btn_bg_yellow">Get access to courses</Link>
                        </div>
                        <div>
                            <div className="img_cover">
                                <img src={ManSmiling} alt="man smiling" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sabi_highlights mt-5">
                <div className="contain">
                    <div>
                        <h3>Unlimited access to 150+ instructors. New classes added every month.</h3>
                        <div className="grid_4">
                            <div className="grid_box">
                                <div className="grid_header">
                                    <ion-icon
                                        class="grid_header_icon"
                                        name="game-controller-outline"></ion-icon>
                                </div>
                                <div className="grid_body">
                                    <h5>Unlimited access to 150+ instructors</h5>
                                    <p className="mb-1">The School of Engineering offers a range of extensive technical courses specifically
                                        designed to equip students with the knowledge and skills required to kickstart. </p>
                                    <p className="mb-2">To ensure students
                                        are duly carried along, we have incorporated active learning to allow for the
                                        application to practice. We also embark on applied research.</p>

                                    <Link
                                    style={{fontSize: '1.3rem', marginTop: 10, display: 'block'}}
                                    to="/">Access Course Content <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                                </div>
                            </div>
                            <div className="grid_box">
                                <div className="grid_header">
                                    <ion-icon
                                        class="grid_header_icon"
                                        name="flask-outline"></ion-icon>
                                </div>
                                <div className="grid_body">
                                    <h5>Unlimited access to 150+ instructors</h5>
                                    <p className="mb-1">The School of Engineering offers a range of extensive technical courses specifically
                                        designed to equip students with the knowledge and skills required to kickstart. </p>
                                    <p className="mb-2">To ensure students
                                        are duly carried along, we have incorporated active learning to allow for the
                                        application to practice. We also embark on applied research.</p>

                                    <Link
                                    style={{fontSize: '1.3rem', marginTop: 10, display: 'block'}}
                                    to="/">Access Course Content <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                                </div>
                            </div>
                            <div className="grid_box">
                                <div className="grid_header">
                                    <ion-icon
                                        class="grid_header_icon"
                                        name="flashlight-outline"></ion-icon>
                                </div>
                                <div className="grid_body">
                                    <h5>Unlimited access to 150+ instructors</h5>
                                    <p className="mb-1">The School of Engineering offers a range of extensive technical courses specifically
                                        designed to equip students with the knowledge and skills required to kickstart. </p>
                                    <p className="mb-2">To ensure students
                                        are duly carried along, we have incorporated active learning to allow for the
                                        application to practice. We also embark on applied research.</p>

                                    <Link
                                    style={{fontSize: '1.3rem', marginTop: 10, display: 'block'}}
                                    to="/">Access Course Content <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                                </div>
                            </div>
                            <div className="grid_box">
                                <div className="grid_header">
                                    <ion-icon
                                        class="grid_header_icon"
                                        name="flashlight-outline"></ion-icon>
                                </div>
                                <div className="grid_body">
                                    <h5>Unlimited access to 150+ instructors</h5>
                                    <p className="mb-1">The School of Engineering offers a range of extensive technical courses specifically
                                        designed to equip students with the knowledge and skills required to kickstart. </p>
                                    <p className="mb-2">To ensure students
                                        are duly carried along, we have incorporated active learning to allow for the
                                        application to practice. We also embark on applied research.</p>

                                    <Link
                                    style={{fontSize: '1.3rem', marginTop: 10, display: 'block'}}
                                    to="/">Access Course Content <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sabi_users bg_black mt-5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <h3>Unlimited access to 150+ instructors. New classes added every month.</h3>
                            <p>
                                Level Up Your Design Skills. Explore new ways to elevate your artwork in Adobe
                                Illustrator with designer Sophia Yeshi. Teach what you know and help learners explore
                                their interests, gain new skills, and advance their careers.</p>
                            <Link to="/" className="mr-1 btn_bg_yellow">Get access to courses</Link>
                        </div>
                        <div>
                            <div className="img_cover">
                                <img src={ManSmiling} alt="man smiling" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mail_me mt-5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <h3>Unlimited access to 150+ instructors. New classes added every month.</h3>
                            <p>
                                Level Up Your Design Skills. Explore new ways to elevate your artwork in Adobe
                                Illustrator with designer Sophia Yeshi. Teach what you know and help learners explore
                                their interests, gain new skills, and advance their careers.</p>
                        </div>
                        <div>
                            <form>
                                <div>
                                    <Controller name="email" id="mail" control={control} defaultValue=""
                                        render={({ field }) => {
                                            return (
                                                <Input type="text"
                                                    style={{ height: '6rem', border: '2px solid #111' }}
                                                    name="email" {...field} />
                                            )
                                        }}
                                    />
                                    <button className="btn_bg_yellow">Chat with me</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;