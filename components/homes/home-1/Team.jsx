"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { teamMembers } from "@/data/team";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
    return (
        <div className='container position-relative'>
            <div className='row gap-6'>
                {/* Quote */}
                <div className='col-md-6 mb-sm-60 mb-xs-40 d-flex align-items-center'>
                    <div className=' mb-0 wow fadeInUp'>
                        <h6>How You Can Help</h6>
                        <h2>There are countless ways you can help us in our quest.</h2>
                        <footer>
                            <div className='small'>
                                Join us in making a difference by supporting our mission through generous donations, ensuring sustainable impact in
                                India's border villages. Additionally, consider volunteering your time and skills to directly contribute to our
                                initiatives, bringing positive change and hope to those in need..
                            </div>
                        </footer>
                    </div>
                </div>
                {/* End Quote */}
                {/* Team Carousel */}
                <div className='col-md-6 relative'>
                    <div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={2}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2, // When window width is <= 480px
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".snbp1",
                                nextEl: ".snbn1",
                            }}
                            watchSlidesProgress
                            resizeObserver
                            className='team-carousel owl-carousel owl-theme overflow-hidden position-static'
                            style={{
                                opacity: 1,
                                display: "block",
                            }}
                        >
                            {/* Team item */}
                            {teamMembers.map((member, index) => (
                                <SwiperSlide className='owl-item' key={index}>
                                    <div className='team-carousel-item'>
                                        <div className='team-item'>
                                            <div className='team-item-image'>
                                                <Image
                                                    width={600}
                                                    height={400}
                                                    src={member.image}
                                                    className='wow scaleOutIn'
                                                    alt={`${member.name} image`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* End Team item */}
                        </Swiper>
                    </div>
                </div>
                {/* End Team Carousel */}
            </div>
        </div>
    );
}
