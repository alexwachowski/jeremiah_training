"use client"

import Image from "next/image";
// import MapComponent from "./components/MapComponent.js";
import Footer from "./components/footer.jsx";
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./components/MapComponent.js'), { ssr: false });

export default function Home() {
  return (
    <div className="bg-grey-900">
    {/* <NavBar /> */}
    {/* Hero section */}
    <section className="relative w-screen h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed opacity-75"
      style={{ backgroundImage: 'url(/images/hero-jer2.jpg)' }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white bg-gray-900 bg-opacity-75 p-4 w-full">
        <h1 className="text-4xl font-bold sm:text-6xl">Jeremiah Hernandez</h1>
        <h2 className="mt-4 text-lg sm:text-xl">Build Strength, Break Limits</h2>
      </div>
    </section>
    <section className="relative w-screen h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/jer1.jpg"
            alt="Image 1"
            width={600}
            height={400}
            className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold text-center p-4">
            My journey began with overcoming self-doubt and finding strength in consistency.
          </p>
        </div>
      </div>

      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/images/jer2.jpg"
          alt="Image 3"
          width={600}
          height={400}
          className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      {/* Overlay */}
        <div className="absolute inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold text-center p-4">
            Balancing nutrition and strength training helped me transform my health and mindset.
          </p>
        </div>
    </div>
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <Image
        src="/images/jer3.jpg"
        alt="Image 3"
        width={600}
        height={400}
        className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold text-center p-4">
        Through discipline and dedication, I turned setbacks into comebacks, proving that fitness is a lifelong journey.
        </p>
      </div>
    </div>
      </div>
    </section>

    <section className="relative flex flex-col items-center justify-center w-full bg-zinc-200 py-16 px-8 my-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl">
          Have a question or want to work together? Feel free to drop me a message using the form below!
        </p>

        <form className="w-full max-w-3/4 bg-zinc-50 p-8 rounded-xl shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="max-w-3/4 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </section>


    <section className="w-screen py-12 bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h2>

        {/* Map Component */}
        <MapComponent />

        <div className="mt-6 text-center text-gray-700">
          <p className="text-lg">Come train with Jeremiah in beautiful Wimberley, Texas!</p>
          <p className="text-sm mt-2">
            Find us at: <strong>2V2X+6M, Wimberley, Texas</strong>
          </p>
        </div>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}
