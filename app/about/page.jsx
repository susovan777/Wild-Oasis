import React from 'react';
import Image from 'next/image.js';
import image1 from '@/public/about-1.jpg';
import image2 from '@/public/about-2.jpg';

export const metadata = {
  title: 'About',
};

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-8 xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-24 gap-y-12 text-lg items-center mb-10">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Welcome to The Wild Oasis
          </h1>
          <div className="space-y-8">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and stargaze from
              your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down and feel
              the joy of being together.
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 bg-accent-100 w-full">
          <Image
            src={image1}
            quality={80}
            placeholder="blur"
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-24 gap-y-12 text-lg items-center">
        <div className="col-span-3 lg:col-span-2 bg-accent-100 w-full">
          <Image
            src={image2}
            quality={75}
            placeholder="blur"
            alt="Family that manages The Wild Oasis"
          />
        </div>
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Managed by our family since 1962
          </h1>
          <div className="space-y-8">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat, started by our grandparents and nurtured with love
              through generations.
            </p>
            <p>
              We blend timeless mountain beauty with warm hospitality. You’re
              not just a guest here — you’re part of the family.
            </p>
            <div>
              <a
                className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                href="/cabins"
              >
                Explore our luxury cabins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
