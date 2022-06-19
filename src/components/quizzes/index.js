import "../../assets/css/courses.css";

import React from 'react';

import _1 from '../../assets/images/content/_1.webp';
import _2 from '../../assets/images/content/_2.webp';
import _3 from '../../assets/images/content/_3.webp';
import _4 from '../../assets/images/content/_4.webp';

import Nav from '../../common_files/nav';
import Footer from '../../common_files/footer';


const Courses = () => {
    return (
        <div>
            <Nav />
            <div className="course_header">
                <div className="contain">
                    <h2>How to Find the Sum of an Array of Numbers in JavaScript</h2>
                    <p>If the array is empty and no initialValue is provided, an error will be thrown. So it is
                        safer to provide an initial value such as 0 if you're performing addition, and 1 if you're
                        performing multiplication.</p>
                    <button className="btn_bg_yellow">Update Profile Information</button>
                </div>
            </div>
            <div>
                <div className="mt-5">
                    <div className="contain">
                        <div className="filter_row">
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="reader-outline"></ion-icon>
                                    <p>Read</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="calculator-outline"></ion-icon>
                                    <p>Calculations</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="american-football-outline"></ion-icon>
                                    <p>Sports</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="alarm-outline"></ion-icon>
                                    <p>Short</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="boat-outline"></ion-icon>
                                    <p>Engaging</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="car-sport-outline"></ion-icon>
                                    <p>Automotive</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="card-outline"></ion-icon>
                                    <p>Money</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="brush-outline"></ion-icon>
                                    <p>Art</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="flask-outline"></ion-icon>
                                    <p>Science</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="flower-outline"></ion-icon>
                                    <p>Nature</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="planet-outline"></ion-icon>
                                    <p>Space</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="fast-food-outline"></ion-icon>
                                    <p>Food</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="bug-outline"></ion-icon>
                                    <p>Animals</p>
                                </div>
                            </div>
                            <div className="filter_block_cover">
                                <div className="filter_block">
                                    <ion-icon
                                        class="filter_icon"
                                        name="camera-outline"></ion-icon>
                                    <p>Camera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="courses">
                    <div className="contain">
                        <div className="course_block mt-3">
                            <h4 className="course_block_title">Mathematics</h4>
                            <div className="grid_4">
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_1} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_2} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_3} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_4} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course_block mt-3">
                            <h4 className="course_block_title">Mathematics</h4>
                            <div className="grid_4">
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_1} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_2} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_3} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_4} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course_block mt-3">
                            <h4 className="course_block_title">Mathematics</h4>
                            <div className="grid_4">
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_1} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_2} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_3} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_4} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course_block mt-3">
                            <h4 className="course_block_title">Mathematics</h4>
                            <div className="grid_4">
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_1} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_2} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_3} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_4} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_1} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_2} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_3} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course_block_body">
                                    <div className="course_block_body_header">
                                        <img src={_4} alt="course flier" />
                                    </div>
                                    <div className="course_block_body_content">
                                        <div className="content_details">
                                            <div className="grid_flex">
                                                <p>4000 views</p>
                                                <p>3hr 17mins</p>
                                            </div>
                                        </div>
                                        <h3>Animation Principles: Add Playful Personality To Your Animations</h3>
                                        <p>Animation principles are an invaluable set of guidelines for creating more
                                            appealing motion in your animations. Whether you've had formal training in
                                            motion design.</p>
                                        <div className="course_block_body_footer">
                                            <div className="grid_flex">
                                                <p>Don Mupasi X Visualdon</p>
                                                <ion-icon name="bookmark-outline"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Courses;