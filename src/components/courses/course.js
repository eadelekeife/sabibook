import "../../assets/css/courses.css";

import React from 'react';

import { Tabs } from 'antd';

import Nav from '../../common_files/course_nav';
import Footer from '../../common_files/footer';
import Product from '../../assets/images/content/_1.png';

const Courses = () => {
    const { TabPane } = Tabs;
    const onChange = key => {
        console.log(key);
    };
    return (
        <div>
            <Nav />
            <div className="video_header">
                <div className="video_grid">
                    <div>

                    </div>
                    <div className="course_outlines">
                        <div>
                            <h4>Course outline</h4>
                        </div>
                        <ul>
                            <li>1. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>2. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>3. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>4. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>5. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>6. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>7. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>8. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>9. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                            <li>10. How to get Help <br />
                                <small><ion-icon name="play-circle-outline"></ion-icon>1min</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contain">
                <div className="video_tab_flex">
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        <TabPane tab="Course Overview" key="1">
                            <div>
                                <div className="course_flex">
                                    <div>
                                        <h4>By the numbers:</h4>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span className="first_span">Intended Class:</span>
                                                <span className="second_span">JSS One</span>
                                            </li>
                                            <li>
                                                <span className="first_span">Students:</span>
                                                <span className="second_span">266,209</span>
                                            </li>
                                            <li>
                                                <span className="first_span">Languages:</span>
                                                <span className="second_span">English</span>
                                            </li>
                                            <li>
                                                <span className="first_span">Video:</span>
                                                <span className="second_span">52.5 total hours</span>
                                            </li>
                                            <li>
                                                <span className="first_span">Intended Class:</span>
                                                <span className="second_span">JSS One</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="course_flex">
                                    <div>
                                        <h4>Features</h4>
                                    </div>
                                    <div>
                                        <p>Exercises to test Course knowledge</p>
                                    </div>
                                </div>
                                <div className="course_flex">
                                    <div>
                                        <h4>Description</h4>
                                    </div>
                                    <div>
                                        <p>Congratulations!  You've found the most popular, most complete, and most
                                            up-to-date resource online for learning React and Redux!</p>
                                        <p>Thousands of other engineers have learned React and Redux, and you can too. This
                                            course uses a time-tested, battle-proven method to make sure you understand
                                            exactly how React and Redux work, and will get you a new job working as a
                                            software engineer or help you build that app you've always been dreaming about.</p>
                                        <p>React is the most popular Javascript library of the last five years, and the
                                            job market is still hotter than ever.  Companies large and small can't hire
                                            engineers who understand React and Redux fast enough, and salaries for
                                            engineers are at an all time high.  It's a great time to learn React!</p>
                                        <p>Congratulations!  You've found the most popular, most complete, and most
                                            up-to-date resource online for learning React and Redux!</p>
                                        <p>Thousands of other engineers have learned React and Redux, and you can too. This
                                            course uses a time-tested, battle-proven method to make sure you understand
                                            exactly how React and Redux work, and will get you a new job working as a
                                            software engineer or help you build that app you've always been dreaming about.</p>
                                        <p>React is the most popular Javascript library of the last five years, and the
                                            job market is still hotter than ever.  Companies large and small can't hire
                                            engineers who understand React and Redux fast enough, and salaries for
                                            engineers are at an all time high.  It's a great time to learn React!</p>
                                        <p>Congratulations!  You've found the most popular, most complete, and most
                                            up-to-date resource online for learning React and Redux!</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Reviews" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Exercises" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                    <div>
                        <div className="promo_display">
                            <h3>20 mins delivery</h3>
                            <p>Shop your everyday groceries needs and in mins!</p>
                            <img src={Product} alt="product" />
                            <button>Shop now</button>
                        </div>
                        <div className="promo_display">
                            <h3>20 mins delivery</h3>
                            <p>Shop your everyday groceries needs and in mins!</p>
                            <img src={Product} alt="product" />
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Courses;