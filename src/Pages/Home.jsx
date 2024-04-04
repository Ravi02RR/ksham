// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import { Link } from 'react-router-dom';

import Supportes from '../Components/Supportes';
import OurSponsors from '../Components/ourSponsers';

import HomeComponent from '../Components/HomeComponent';

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

        <HomeComponent></HomeComponent>
      </div>

      {/* Second section */}
      <div className="hero  min-h-screen bg-base-200 relative" id='sec2'>
        <div className="hero-content flex flex-col lg:flex-row lg:gap-24 items-center justify-center relative z-10">
          <div className="w-full lg:w-[95%] h-[350px] lg:h-[300px] rounded-lg shadow-2xl overflow-hidden mb-8 lg:mb-0">
            <canvas id='canvas3d' className="w-full h-full"></canvas>
          </div>
          <div className="text-center lg:text-left  font-serif">
            <h1 className="text-3xl lg:text-3xl font-bold mb-4 leading-tight">&quot;Introducing&quot;</h1>
            <h2 className="text-4xl lg:text-4xl font-bold mb-4 leading-tight">&quot;World&apos;s 1st Smart Aid Glasses&quot;</h2>
            <p className="text-lg lg:text-2xl mb-4 lg:mb-6">&quot;Revolutionizing Accessibility for&quot;</p>
            <ul className="mb-6 list-disc text-lg lg:text-2xl">
              <li className="inline-block mr-4"><span className="font-extrabold text-3xl lg:text-4xl">&quot;Deaf&quot;,</span></li>
              <li className="inline-block mr-4"><span className="font-extrabold text-3xl lg:text-4xl ">&quot;Mute&quot;,</span></li>
              <li className="inline-block"><span className="font-extrabold text-3xl lg:text-4xl">&quot;Blind&quot;</span></li>
            </ul>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed">The Able glasses utilize patented bone conduction technology to enable the Deaf to listen, interpret signs, and serve as a voice assist tool for the Mute. The sensory audio-based information enables the Blind to visualize their surroundings.</p>
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
