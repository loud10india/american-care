"use client";
import { contactItems } from "@/data/contact";
import React from "react";

export default function Contact() {
    return (
        <div className='container position-relative'>
            <div className='row wow fadeInUp'>
                {/* Left Column */}
                <div className='col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1'>
                    {contactItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <hr className='mt-0 mb-40 mb-sm-20' />
                            <div className={`contact-item mb-40 mb-sm-20`}>
                                <div
                                    className='ci-icon'
                                    style={{
                                        backgroundColor: "#e91248 !important",
                                        color: "#FF0000.",
                                        display: "inline - flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                >
                                    <i
                                        className={item.iconClass}
                                        style={{ backgroundColor: "#e91248", padding: "12px", borderRadius: "50%", marginTop: "25px" }}
                                    />
                                </div>
                                <h4 className='ci-title'>{item.title}</h4>
                                <div className='ci-text'>{item.text}</div>
                                <div className='ci-link'>
                                    <a href={item.link.url} target={item.link.target} rel={item.link.rel}>
                                        {item.link.text}
                                    </a>
                                </div>
                            </div>{" "}
                        </React.Fragment>
                    ))}
                    {/* End Phone */}
                    <hr className='mt-0 mb-0' />
                </div>
                {/* End Left Column */}
                {/* Right Column */}
                <div className='col-lg-8 col-xl-7 offset-xl-1 d-flex align-items-strech'>
                    <div className='bg-gradient-light-2 round overflow-hidden w-100 px-4 py-5 p-sm-5' style={{ backgroundColor: "#e91248" }}>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1 col-xl-8 offset-xl-2'>
                                <h4 className='section-descr-medium mt-n10 mb-30 text-center' style={{ color: "white" }}>
                                    Drop us a line to get your next project started. We'd love to hear from you.
                                </h4>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <form onSubmit={(e) => e.preventDefault()} className='form contact-form' id='contact_form'>
                            {/* <div className='row'> */}
                            <div className=''>
                                {/* Name */}
                                <div className='form-group'>
                                    <label htmlFor='name' style={{ color: "white" }}>
                                        Name
                                    </label>
                                    <div className='input-grad-wrap round' style={{ backgroundColor: "#fff" }}>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            className='input-md input-grad round form-control'
                                            placeholder='Enter your name'
                                            pattern='.{3,100}'
                                            required
                                            aria-required='true'
                                        />
                                    </div>
                                </div>
                                {/* End Name */}
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    {/* Email */}
                                    <div className='form-group'>
                                        <label htmlFor='email' style={{ color: "white" }}>
                                            Email
                                        </label>
                                        <div className='input-grad-wrap round'>
                                            <input
                                                type='email'
                                                name='email'
                                                id='email'
                                                className='input-md input-grad round form-control'
                                                placeholder='Enter your email'
                                                pattern='.{5,100}'
                                                required
                                                aria-required='true'
                                            />
                                        </div>
                                    </div>
                                    {/* End Email */}
                                </div>
                                <div className='col-md-6'>
                                    {/* Email */}
                                    <div className='form-group'>
                                        <label htmlFor='email' style={{ color: "white" }}>
                                            Phone
                                        </label>
                                        <div className='input-grad-wrap round'>
                                            <input
                                                type='tel'
                                                name='mobile'
                                                id='mobile'
                                                className='input-md input-grad round form-control'
                                                placeholder='Enter your number'
                                                pattern='.{3,100}'
                                                required
                                                aria-required='true'
                                            />
                                        </div>
                                    </div>
                                    {/* End Email */}
                                </div>
                            </div>
                            {/* </div> */}
                            {/* Message */}
                            <div className='form-group'>
                                <label htmlFor='message' style={{ color: "white" }}>
                                    Message
                                </label>
                                <div className='input-grad-wrap round'>
                                    <textarea
                                        name='message'
                                        id='message'
                                        className='input-md input-grad round form-control'
                                        style={{ height: 101 }}
                                        placeholder='Enter your message'
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-xl-7 d-flex align-items-center'>
                                    {/* Inform Tip */}
                                    <div className='form-tip w-100 pt-3' style={{ color: "white" }}>
                                        <i className='icon-info size-16' />
                                        All the fields are required. By sending the form you agree to the{" "}
                                        <a style={{ color: "white" }} href='#'>
                                            Terms &amp; Conditions
                                        </a>{" "}
                                        and{" "}
                                        <a style={{ color: "white" }} href='#'>
                                            Privacy Policy
                                        </a>
                                        .
                                    </div>
                                    {/* End Inform Tip */}
                                </div>
                                <div className='col-md-6 col-xl-5 mt-sm-20'>
                                    {/* Send Button */}
                                    <div className='pt-3 text-md-end'>
                                        <button
                                            className='submit_btn btn-mod btn-medium  btn-round'
                                            data-btn-animate='y'
                                            id='submit_btn'
                                            aria-controls='result'
                                            style={{ backgroundColor: "#d11141" }}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                    {/* End Send Button */}
                                </div>
                            </div>
                            <div id='result' role='region' aria-live='polite' aria-atomic='true' />
                        </form>
                        {/* End Contact Form */}
                    </div>
                </div>
                {/* End Right Column */}
            </div>
        </div>
    );
}
