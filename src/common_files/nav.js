import '../assets/css/nav.css';

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer } from 'antd';

import Logo from '../assets/images/nav/logo.svg';


const Navi = props => {

    const [fixedNav, setFixed] = useState(false);

    const [visibleNav, setVisibleNav] = useState(false);

    const onCloseNav = () => setVisibleNav(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    const controlNav = () => {
        setVisibleNav(true)
    }

    return (
        <div className="">
            <div className="desktop">
                <div className={`navigation ${fixedNav ? 'fixed' : ''}`}>
                    <img src={Logo} className="logo" alt="logo" />
                    <div>
                        <ul>
                            <li>
                                <Link to="/quizzes">Quizzes</Link>
                            </li>
                            <li>
                                <Link to="/courses">Courses</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">Our Story</Link>
                            </li>
                            <li>
                                <Link to="/">My Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/">My Resume</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/signin">Log In</Link>
                            </li>
                            <li className="btn_bg_yellow">
                                <Link to="/">Get started &mdash; It's free</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className={`navigation ${fixedNav ? 'fixed' : ''}`}>
                    <img src={Logo} alt="logo" />
                    <div>
                        <div onClick={() => setVisibleNav(true)}>
                            <ion-icon 
                            style={{fontSize: 30}}
                            name="menu-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <Drawer
                    title={
                        <div className={`mobile navi`}>
                            <div className="navigation">
                                <img src={Logo} alt="logo" />
                                <div>
                                    <div onClick={() => setVisibleNav(false)}>
                                        <i class="uil uil-times"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    placement={'left'}
                    closable={false}
                    onClose={onCloseNav}
                    visible={visibleNav}
                    key={'left'}
                >
                    <div style={{ marginTop: '5%' }}></div>
                    <ul>
                        <li>
                            <NavLink to="/podcast" exact activeClassName="active-nav">
                                <p>Podcasts</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="active-nav">
                                <p>Blog</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/quiz" activeClassName="active-nav">
                                <p>Quiz</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/youtube" activeClassName="active-nav">
                                <p>Youtube</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/subscribe" activeClassName="active-nav">
                                <p>Subscribe</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/donate" activeClassName="active-nav">
                                <p>Donate</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account" activeClassName="active-nav">
                                <p>Account</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/youtube" activeClassName="active-nav">
                                <p>Diary of dreams</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/subscribe" activeClassName="active-nav">
                                <p>People</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/donate" activeClassName="active-nav">
                                <p>Places</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account" activeClassName="active-nav">
                                <p>Resources</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account" activeClassName="active-nav">
                                <p>Youtubers</p>
                            </NavLink>
                        </li>
                    </ul>
                </Drawer>
            </div>
        </div>
    )
}

const mapStateToProps = store => (
    { auth: store.auth }
)

export default connect(mapStateToProps)(Navi);