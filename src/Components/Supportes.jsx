// eslint-disable-next-line no-unused-vars
import React from 'react'
// import cahsma from '../assets/cashma.png'
const Supportes = () => {
    return (
        <>
            <div className='flex justify-evenly flex-wrap'>
                <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4 text-center  text-yellow-700">Our Innovation</h1>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="text-lg text-yellow-700">
                            <p className="mb-4 font-bold">
                                Able glasses aims to provide smart aid glasses for Deaf, Mute, and Blind.
                            </p>
                            <p className="mb-4 italic">
                                The Able glasses use patented bone conduction to enable Deaf to Listen, interpret signs & act as a voice assist tool for the mute. The sensory audio-based information enables the blind to visualize.
                            </p>
                            <p>
                                The open-ear design makes Able glasses a complete smart glasses device for everyone.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="max-w-xs " />
                        </div>
                    </div>
                </div>

                <div><ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical  text-yellow-700">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2002</time>

                            <div className="text-lg font-black">Glasses for Deaf & Hard of hearing </div>
                            <ul>
                                <li>Patented Dome Bone Conduction Transduce &bull;</li>
                                <li>Arrays of Microphones &bull;</li>
                                <li>Bluetooth & Rechargeable &bull;</li>
                            </ul>

                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">

                            <div className="text-lg font-black">IGlasses for Blind.</div>
                            <ul>
                                <li>&bull; Objects & Face Recognition</li>
                                <li>&bull; 1080p front camera</li>
                            </ul>

                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <div className="text-lg font-black">Glasses for Mute</div>
                            <ul>
                                <li>Real time sign language to audio conversion &bull;</li>
                                <li>Pairs of side camera & speaker &bull;</li>
                                <li>Offline processing &bull;</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">ongoing.</time>
                            <div className="text-lg font-black">Smart Case</div>
                            <ul>
                                <li>&bull; Day long battery backup</li>
                                <li>&bull; Desktop computer mode.</li>
                            </ul>

                        </div>
                        <hr />
                    </li>

                </ul></div>
                
            </div>
        </>
    )
}

export default Supportes