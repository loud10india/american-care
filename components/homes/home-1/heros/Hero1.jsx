"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";
import Image from "next/image";

import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero1() {
    useEffect(() => {
        parallaxMouseMovement();
    }, []);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className='container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120'>
                {/* Home Section Content */}
                <div className='home-content text-start'>
                    <div className='row'>
                        {/* Home Section Text */}
                        <div className='col-md-6 d-flex align-items-center mb-sm-60'>
                            <div>
                                <h1 className='hs-title-1 mb-30' style={{ color: "white", font: "bold" }}>
                                    <AnimatedText text={"Transforming Lives,Inspiring Hope"} />
                                </h1>

                                <p className=' mb-50 wow fadeInUp' data-wow-delay='0.6s' data-wow-duration='1.2s' style={{ color: "white" }}>
                                    Welcome to American Care Foundation - A Beacon of Hope for the Underprivileged.
                                </p>
                                <div
                                    className='local-scroll mt-n10 wow fadeInUp wch-unset'
                                    data-wow-delay='0.7s'
                                    data-wow-duration='1.2s'
                                    data-wow-offset={0}
                                >
                                    <a href='#about' className='btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10'>
                                        <span>Donate</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Home Section Text */}
                    </div>
                </div>
                {/* End Home Section Content */}
            </div>
            <ModalVideo channel='youtube' youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId='jTea_8Fk5Ns' onClose={() => setOpen(false)} />
        </>
    );
}
