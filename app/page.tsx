import Image from 'next/image';
import { Itim } from 'next/font/google';
import img from '../public/jobs.png';

// Import Timer directly — it's already a Client Component
import Timer from './components/timer';

const itim = Itim({ subsets: ['latin'], weight: '400' });

export default function ComingSoon() {
  return (
    <main className="container mx-auto min-h-screen flex justify-center items-center px-4">
      <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Text Section */}
        <aside className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl mb-5 text-black leading-tight">
            <small className="block text-xl sm:text-2xl lg:text-3xl font-semibold">
              Our website is
            </small>
            <span className={`${itim.className} block mt-2`}>Coming soon</span>
          </h1>

          <h2 className="text-black text-base sm:text-lg lg:text-xl">
            We&apos;re{' '}
            <span className="bg-white px-2 py-1 font-semibold rounded shadow-md">
              Under Construction
            </span>{' '}
            will be here soon.
          </h2>

          <h3 className="bg-white text-black font-semibold text-lg sm:text-xl lg:text-2xl uppercase px-2 py-1 inline-block rounded shadow-md mt-5">
            Stay Tuned!
          </h3>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Timer launchDate="2025-12-31T00:00:00Z" />
          </div>
        </aside>

        {/* Image Section */}
        <aside className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={img}
            alt="Coming Soon"
            width={650}
            height={450}
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] h-auto"
          />
        </aside>
      </section>
    </main>
  );
}
