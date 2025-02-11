import React from "react";

export default function Footer1({ dark = false }) {
    return (
        <footer className={`pt-80 footer ${dark ? "bg-dark-2 " : "bg-gray-light-1"}  pb-70`} style={{ backgroundColor: "#e91248", color: "white" }}>
            <div className='container row '>
                <div className='col-md-4 col-lg-3'>
                    <b>COPYRIGHT {new Date().getFullYear()}.</b>
                </div>
                <div className='col-md-7 offset-md-1 offset-lg-2 clearfix'>
                    <b>ALL RIGHTS RESERVED | PRIVACY POLICY</b>
                    {/* Back to Top Link */}
                    <div className='local-scroll float-end mt-n20 mt-sm-10'>
                        <a href='#top' className='link-to-top'>
                            <i className='mi-arrow-up size-24' />
                            <span className='visually-hidden'>Scroll to top</span>
                        </a>
                    </div>
                    {/* End Back to Top Link */}
                </div>
            </div>
        </footer>
    );
}
