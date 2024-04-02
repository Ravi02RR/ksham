// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import { Link } from 'react-router-dom';
import home from '../assets/home.mp4';
import Supportes from '../Components/Supportes';
import OurSponsors from '../Components/ourSponsers';
import './homeCustom.css';

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/uiBYXoo5OJZOWcZy/scene.splinecode');
  }, []);

  return (
    <div>
      {/* First section */}
      <div className="hero min-h-screen relative" id='sec1'>
        <video className="absolute inset-0 w-full h-full  object-fill" autoPlay loop muted>
          <source src={home} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second section */}
      <div className="hero  min-h-screen bg-base-200 relative" id='sec2'>
        <div className="hero-content flex flex-col lg:flex-row items-center justify-center relative z-10">
          <div className="w-full lg:w-[75%] h-auto lg:h-[300px] rounded-lg shadow-2xl overflow-hidden mb-8 lg:mb-0">
            <canvas id='canvas3d' className="w-full h-full"></canvas>
          </div>
          <div className="text-center lg:text-left  text-yellow-700">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 ">World&apos;s 1st Smart Aid Glasses for</h1>
            <ul className="mb-4 list-disc">
              <li className="inline-block mr-4"><h3 className="text-3xl lg:text-5xl font-bold underline">&quot;Deaf&quot;</h3></li>
              <li className="inline-block mr-4"><h3 className="text-3xl lg:text-5xl font-bold underline">Mute</h3></li>
              <li className="inline-block"><h3 className="text-3xl lg:text-5xl font-bold underline">&quot;Blind&quot;</h3></li>
            </ul>
            <p className="text-lg lg:text-2xl py-4 lg:pr-16 lg:py-6">The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.</p>
            <Link to={'/Contact'}><button className="btn btn-outline">Get Early Access</button></Link>
          </div>
        </div>
      </div>
      <section className='min-h-screen flex items-center'>
        <Supportes />
      </section>
      <div className="divider divider-accent"></div>
      <section className='min-h-screen flex items-center'>
        <OurSponsors />
      </section>
    </div>
  );
};

export default Home;
