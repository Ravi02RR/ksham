// eslint-disable-next-line no-unused-vars
import React from 'react'
import home from '../assets/home.mp4'



const About = () => {
    return (
        <>
            <div className='p-5 md:p-10 lg:p-20'>
                <div id="about" className="relative bg-white overflow-hidden mt-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                                <polygon points="50,0 100,0 50,100 0,100"></polygon>
                            </svg>

                            <div className="pt-1"></div>

                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                        &quot;What We Do&quot;
                                    </h2>

                                    <p className='text-xl'>
                                        &quot;We at Ksham Innovation work to provide smart aid glasses for Deaf, Mute and Blind.
                                        <br /> The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret sign language for mute, the sensory audio-based information enables the blind to visualize.
                                        <br />The open ear design makes able glasses a complete smart glasses device for everyone.&quot;
                                    </p>


                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full">
                        <video className="w-full h-full object-cover" autoPlay loop muted>
                            <source src={home} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>



                </div>




                {/* crauser */}

                <div className="carousel w-full mt-6">
                    <div id="slide1" className="carousel-item relative w-full">

                        <div className="mockup-window border bg-base-300 p-20">
                            <h2 className="text-3xl font-bold mb-4">Description</h2>
                            <p className="text-xl font-serif italic leading-relaxed">
                                &quot;At Ksham Innovation, we break down barriers and make technology accessible to everyone. We believe that everyone deserves the opportunity to hear, speak, and navigate the world in real-time, regardless of having hearing, speech, or visual impairment.

                                Our technology is designed to empower those with disabilities, allowing them to learn, communicate & perform their daily chores with greater ease and independence. But our work doesn&apos;t stop there. We dream & envision creating a smart and safer alternative to traditional earbuds and headphones, extending the age during which people may face difficulties in hearing.

                                By doing so, we are not only improving the lives of those with hearing loss, but also providing a solution for anyone who wants to enjoy music, information access in a safer way, and audio content while minimizing the risk of damaging their hearing.&quot;
                            </p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="mockup-window border bg-base-300 p-20">
                            <h2 className="text-3xl font-bold mb-4">Our Vison</h2>
                            <p className="text-xl font-serif italic leading-relaxed">
                                <span className='font-bold'>`&quot;Empowering a World Without Communication Barriers&quot;`</span>: Our vision is to leverage cutting-edge technology to empower individuals with hearing, speech, or visual impairments, fostering a more inclusive and accessible world. We envision a future where our smart glasses become a bridge to communication, independence, and endless possibilities, allowing everyone, regardless of their abilities, to connect, express themselves, and thrive in our interconnected society.
                            </p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>



                {/* <div className="mockup-window border bg-base-300 p-8 mt-4">
                    <h2 className="text-3xl font-bold mb-4">Description</h2>
                    <p className="text-xl font-serif italic leading-relaxed">
                        &quot;At Ksham Innovation, we break down barriers and make technology accessible to everyone. We believe that everyone deserves the opportunity to hear, speak, and navigate the world in real-time, regardless of having hearing, speech, or visual impairment.

                        Our technology is designed to empower those with disabilities, allowing them to learn, communicate & perform their daily chores with greater ease and independence. But our work doesn&apos;t stop there. We dream & envision creating a smart and safer alternative to traditional earbuds and headphones, extending the age during which people may face difficulties in hearing.

                        By doing so, we are not only improving the lives of those with hearing loss, but also providing a solution for anyone who wants to enjoy music, information access in a safer way, and audio content while minimizing the risk of damaging their hearing.&quot;
                    </p>
                </div> */}
            </div>
        </>
    )
}

export default About