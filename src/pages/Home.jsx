import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/forms/button";
import bg1 from '/images/bg-1.jpg';
import bg2 from '/images/bg-2.jpg'


// const speakers = [
//   {
//     name: 'Ava Charlotte',
//     title: 'Networking',
//     img: 'https://randomuser.me/api/portraits/women/65.jpg',
//   },
//   {
//     name: 'James William',
//     title: 'Engineering',
//     img: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'Grace Amelia',
//     title: 'Marketing',
//     img: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     name: 'Jack Henry',
//     title: 'AI & Data',
//     img: 'https://randomuser.me/api/portraits/men/45.jpg',
//   },
// ];

const Home = () => (
  <>
<section
  className="pt-16 min-h-screen flex items-center text-center text-white z-999 relative"
  style={{
    background: "linear-gradient(225deg, #0f9d58 0%, #43e97b 40%, #ff6a00 100%)",
  }}
>
  <div
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('${bg1}')`,
      opacity: 0.5,
      mixBlendMode: "multiply",
    }}
  />
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    <p className="text-xl font-semibold justify-center">Saturday 04, October, 2025</p>
    <h1 className="text-8xl font-extrabold leading-tight">BLC'25</h1>

    <div className="mt-5 mb-16">
    <p className="text-lg font-semibold justify-center">@ <strong>FASTNET Cinema Hall</strong></p>
    <p className="text-lg font-semibold justify-center">Opposite Federal Secretariate, Jimeta-Yola, Adamawa State, Nigeria</p>
    </div>

     <div>
              <Link to="/register">
                <Button text="Register Now" />
              </Link>
            </div>
  </div>
</section>

    <section className="py-20 primary-bg text-white px-4 sm:px-6 md:px-8 lg:px-12">

      <h2 className="text-4xl md:text-5xl font-extrabold  text-center">
        Business Leaders Convergence
      </h2>

      <p className="my-5 md:mx-20 text-justify">The Business Leaders Convergence is an annual summit organized
        by Sabi Corporate Limited, dedicated to bringing together business leaders and business owners, dedicated
        to fostering innovation, collaboration, and leadership among the business elite.  This prestigious event
        serves as a cornerstone for networking, learning, and strategic development,
        tailored for business leaders and owners striving for excellence in their respective industries.</p>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-12 py-12">

        <div className="flex-1 flex flex-col items-center text-center">
          <div className="mt-6">
            <img src={bg1} alt="Speaker" className="w-18 h-18 rounded-2xl border-2 border-white" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <div className="mt-6">
            <img src={bg2} alt="Speaker" className="w-18 h-18 rounded-2xl border-2 border-white" />
          </div>
        </div>

      </div>

    </section>

    <section
      className="relative py-10 px-10 primary-bg-dark text-white text-center overflow-hidden"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-12 py-12">

        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Our Mission
          </h3>
          <p className="text-base opacity-80 max-w-xl text-justify">
            Our mission at the Business Leaders Convergence is
            to empower business leaders and entrepreneurs by
            providing them with cutting-edge insights, practical
            tools, and valuable connections. Through keynote
            presentations, panel discussions, workshops, and
            networking sessions, we strive to deliver a rich
            and impactful experience that enhances leadership
            skills, encourages entrepreneurial spirit,
            and supports sustainable business development.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Our Vision
          </h3>
          <p className="text-base opacity-80 max-w-xl text-justify">
            Our vision is to become the premier business summit in the North East, recognized for our commitment to excellence and our ability to bring together the most innovative and influential minds in business. We envision a thriving business community where leaders are equipped with the knowledge and resources to drive economic growth, embrace new opportunities, and make a positive impact in their industries and beyond.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
          Our Purpose
        </h3>
        <p className="text-base opacity-80 max-w-xl text-justify">
          The Business Leaders Convergence is an annual summit designed
          to bring together business leaders and entrepreneurs from
          across different sectors of the economy. Our primary purpose
          is to create a dynamic platform for networking, knowledge
          sharing, and collaborative opportunities that drive business
          growth and innovation. We aim to foster a community where
          leaders can exchange ideas, inspire one another, and build
          strategic partnerships that propel their businesses to new heights.
        </p>
      </div>
    </section>

    {/* <section className="py-20 primary-bg text-white text-center">
      <p className="text-teal-300 font-semibold mb-2 uppercase tracking-wider">
        Welcome to Evenex Conference
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Meet our first speaker<br />We're adding more every week
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center group">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-48 h-48 rounded-full object-cover mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold">{speaker.name}</h3>
            <p className="primary-text mt-1">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section> */}
  </>
);

export default Home;
