"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className='row wow fadeInUp' data-wow-delay='0.5s'>
            <div className='col-lg-6 mb-md-60'>
                <div className='position-relative'>
                    {/* Image */}
                    <div className='position-relative overflow-hidden'>
                        <Image
                            width={960}
                            height={539}
                            src="/assets/images/let's-help.jpg"
                            className='image-fullwidth relative'
                            alt='Image Description'
                        />
                    </div>
                    {/* End Image */}
                </div>
            </div>
            <div className='col-lg-6 col-xl-5 offset-xl-1'>
                <h4 className='h5'>Our Mission</h4>
                <p style={{ fontSize: "38px", fontWeight: "600", lineHeight: "1.1", color: "black" }}>
                    Empowering lives in India's border villages along the India-Pakistan border through education, healthcare, and community
                    development.
                </p>
                <p className='text-gray'>
                    Through strategic initiatives, we aim to create lasting positive impacts, fostering a future of resilience and opportunity. By
                    fostering positive change, we envision a brighter and more resilient future for the individuals in these border villages,
                    promoting sustainable growth and well-being.
                </p>
            </div>
        </div>
    );
}
