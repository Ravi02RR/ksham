// eslint-disable-next-line no-unused-vars
import React from 'react'
import home from '../assets/home.mp4';
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter'

const HomeComponent = () => {
    return (
        <>


            <div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1670519226176-b6ee170295a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsaW5kJTIwbWFufGVufDB8fDB8fHww)" }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

                <main className="px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center">
                        <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
                            <span className="text-yellow-600 font-bold">World&apos;s 1st
                            </span>  Smart Aid Glasses!
                            <br />
                            For<Typewriter delaySpeed={800} loop={0} typeSpeed={100} words={[" Deaf...", " Mute...", " Blind..."]} />
                        </h2>
                        <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                            We believe that technology should inspire and bring people together.<br></br>That&apos;s why we are passionate about creating innovative solutions that can benefit everyone.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex justify-center">
                            <div className="rounded-md shadow">

                                <Link activeClass="active"

                                    spy={true}
                                    smooth={true}

                                    duration={500} to="sec2" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-4 md:px-10">Explore</Link>

                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a onClick={() => document.getElementById('my_modal_4').showModal()} className="  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-yellow-700 bg-yellow-100 hover:text-yellow-600 hover:bg-yellow-50 focus:outline-none focus:shadow-outline-yellow focus:border-yellow-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                                    Live demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Ksham Innovation!</h3>
                            <video className="w-full h-full  object-contain" autoPlay loop muted>
                                <source src={home} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="modal-action">
                                <form method="dialog">

                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </main>

            </div>





        </>
    )
}

export default HomeComponent
