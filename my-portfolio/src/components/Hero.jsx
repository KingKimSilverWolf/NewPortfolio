import React from 'react';
import me from '../assets/Me.png'; 
import HeroButton from './HeroButton';

function Hero() {
  return (
    <div className="bg-gray-50">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8" id="home">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left ml-3">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl sm:mt-22">
                  Hi, my name is Kim Magidhi 👋🏽
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8">
                  I am a software engineer with a passion for building
                  beautiful and functional applications. I love to learn
                  new technologies and improving my skills 👨🏽‍💻.
                </p>
                <div className="mt-8 sm:mt-10">
                  <a
                    href="#projects"
                  >
                    <HeroButton />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-80 mt-28 ml-25"
                src={me} 
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;