import "../../assets/css/auth.css";

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/nav/logo_auth.svg';
import { Input } from "antd";

const SignIn = () => {
    const { control, handleSubmit } = useForm({});
    return (
        <div>
            <div className="auth_page">
                <div className="auth_flex">
                    <div>
                        <div className="contain">
                            <div>
                                <div>
                                    <img src={Logo} className="auth_logo" alt="logo" />
                                    <h2>Log in to your account</h2>
                                    <p>Teach what you know and help learners explore their interests, gain new skills,
                                        and advance their careers.</p>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit(() => console.log('err'))}>
                                        <div className="form_flex_2">
                                            <div className="form_group">
                                                <label htmlFor="email">Email address</label>
                                                <Controller control={control} name="email"
                                                    render={({ field }) => (
                                                        <Input type="email" name="email" {...field}
                                                            style={{ height: '5rem', width: '100%' }} />
                                                    )} />
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="email">Email address</label>
                                                <Controller control={control} name="email"
                                                    render={({ field }) => (
                                                        <Input type="email" name="email" {...field}
                                                            style={{ height: '5rem', width: '100%' }} />
                                                    )} />
                                            </div>
                                        </div>
                                        <div className="form_group">
                                            <label htmlFor="email">Email address</label>
                                            <Controller control={control} name="email"
                                                render={({ field }) => (
                                                    <Input type="email" name="email" {...field}
                                                        style={{ height: '5rem', width: '100%' }} />
                                                )} />
                                        </div>
                                        <div className="form_group">
                                            <label htmlFor="password">Password</label>
                                            <Controller control={control} name="email"
                                                render={({ field }) => (
                                                    <Input type="password" name="password" {...field}
                                                        style={{ height: '5rem', width: '100%' }} />
                                                )} />
                                        </div>
                                        <button
                                            style={{ width: '100%', padding: '10px' }}
                                            className="btn_bg_yellow">Log In</button>
                                        <div className="auth_links mt-5">
                                            <p>
                                                Forgotten your password? <Link to="/">Reset here</Link>
                                            </p>
                                            <p className="mt-1">
                                                No account yet? <Link to="/">Reset here</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auth_bg">

                    </div>
                </div>
            </div>
            {/* <Footer no_spacing={true} /> */}
        </div>
    )
}

export default SignIn;