import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog() {
    return (
        <div className='row mt-n50'>
            {blogs1.map((elm, i) => (
                <div key={i} className='post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft' data-wow-delay={elm.delay}>
                    <div className='post-prev-container'>
                        <div className='post-prev-img'>
                            <Image width={650} height={412} src={elm.imgSrc} alt='Add Image Description' />
                        </div>
                        <h4 className='post-prev-title'>{elm.title}</h4>
                        <div className='post-prev-text'>{elm.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
