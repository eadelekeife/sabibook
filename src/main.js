import 'antd/dist/antd.css';
import './assets/css/index.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ScrollToTop from './scrolltotop';

import Homepage from './components/homepage';
import Courses from './components/courses';
import Course from './components/courses/course';
import Quizzes from './components/quizzes';
import Quiz from './components/quizzes/quiz';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import ResetPassword from './components/auth/forgot';
import About from './components/other/about';

const Main = () => {
    return (
        <div>
            {/* <Nav /> */}
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<Course />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/aboutus" element={<About />} />
            </Routes>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <ScrollToTop> */}
                <Main />
                {/* </ScrollToTop> */}
            </BrowserRouter>
        </div>
    )
}

export default App;

// ReactDOM.render(<Main />, document.querySelector('#root'));