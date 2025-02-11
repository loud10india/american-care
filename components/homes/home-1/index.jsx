import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Blog from "@/components/homes/home-1/Blog";
import Contact from "@/components/homes/home-7/Contact";

import Gallery1 from "@/components/gallery/Gallery1";

import Team from "@/components/homes/home-1/Team";
export default function Home1({ onePage = false, dark = false }) {
    return (
        <>
            <section className='page-section'>
                <div className='container position-relative'>
                    <h1 style={{ fontSize: "50px" }}>
                        American Care Foundation, Where <span style={{ color: "#1082ce" }}>Compassion</span> Creates Change!
                    </h1>
                    <p>
                        Welcome to the heart of compassion and change, where the American Care Foundation, led by the visionary Dr. Ashok Sharma,
                        stands as a beacon of light for the underprivileged individuals in the border villages of India.
                    </p>
                    <p className='mb-0'>
                        Our commitment is simple yet profound - to uplift communities through healthcare and education, nurturing dreams and fostering
                        a brighter tomorrow. Together, let's embark on a journey of compassion, resilience, and transformation.
                    </p>
                </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""}`} id='about'>
                <div className='container position-relative'>
                    <div className='row mb-60 mb-xs-30'></div>
                    <About />
                </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='blog'>
                <div className='container position-relative'>
                    <div className='row mb-60 mb-xs-30'>
                        <div className='col-md-6'>
                            <h3 className='section-title mb-0'>
                                <span className='wow charsAnimIn' data-splitting='chars' style={{ fontWeight: "600" }}>
                                    How We Help
                                </span>
                            </h3>
                        </div>
                    </div>
                    <Blog />
                </div>
            </section>
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "}`} id='team'>
                <Team />
            </section>

            <section className='page-section mt-10'>
                <Gallery1 parantClass='col-md-4' />
            </section>

            <section className={`page-section  scrollSpysection   ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                <Contact />
            </section>
        </>
    );
}
