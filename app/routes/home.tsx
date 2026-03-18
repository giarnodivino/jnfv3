import { useState } from "react";
import "../app.css";
import Navbar from "../components/Navbar";
import {
  Drone,
  Roof,
  Sunset,
  Location,
  Partner,
  Trust,
  LRT,
  comeback,
  Trains,
  Jeep,
  Street,
} from "../assets/images/allImages";
import Contact from "../components/contact";
import { MapCard, ACcard, ChooseUsCards } from "../components/cards";
import ClientsSection from "../components/tenants";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router";

function App() {
  const latestBlogs = [
    { id: "cubao-comeback", image: comeback, title: "Cubao: The Comeback Kid of Quezon City" },
    { id: "future-cubao-modernization", image: LRT, title: "The Future of Cubao: Modernization and Revival" },
    { id: "affordability-opportunity", image: Street, title: "Affordability and Opportunity" },
    { id: "future-of-cubao", image: Trains, title: "The Future of Cubao" },
    {
      id: "new-face-cubao",
      image: Jeep,
      title: "The New Face of Cubao: Modernization and Revival",
    },
    { id: "sustainability-infrastructure", image: Drone, title: "Sustainability and Infrastructure Outlook" },
  ];

  return (
    <>
      <Navbar />

      {/* WELCOME SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden pt-20 md:mt-18 p-4" id="home">
        <div className="background-image1" />
        <div
          className="relative z-3 h-full flex flex-col pt-18.75
         text-white text-center"
        >
          <h1 className="text-5xl font-extrabold object-top md:text-6xl lg:text-8xl max-w-5xl mx-auto">
            Commercial Property for Lease
          </h1>
          <h2 className="text-lg max-w-3xl mx-auto font-medium desc1 p-4 m-2 md:text-2xl">
            J&F Divino Corporation offers 3786 square meters of commercial space for lease in a prime location in Cubao
            Quezon City
          </h2>
          <div className="flex justify-center mt-6 pt-6">
            <a href="#aboutUs" className="button1 text-lg font-bold md:text-2xl">
              About
            </a>
            <a href="#contactus" className="button1 text-lg font-bold md:text-2xl">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <br />

      {/* ABOUT US SECTION */}
      <section id="aboutUs" className="pb-10 bg-linear-to-b from-white to-gray-200">
        <div className="mx-auto max-w-7xl md:grid md:grid-cols-10 md:gap-8 mt-8">
          {/* ABOUT US */}
          <div className="md:col-span-4">
            <h1 className="pt-4 px-8 text-4xl font-extrabold  md:text-5xl lg:text-6xl">ABOUT US</h1>

            <p className="p-8 text-lg font-light  md:text-xl">
              J&F Divino Development Corporation is a family-owned company founded by Jacobo "Oboy" Divino Sr. and
              Felicidad "Idad" Divino.
            </p>

            <p className="px-8 pb-8 text-lg font-light  md:text-xl">
              What began as a two-story residence with a small bakery gradually evolved into apartment units at the rear
              of the property.
            </p>

            <p className="px-8 pb-8 text-lg font-light  md:text-xl">
              Over the decades, the company helped shape Cubao through well-planned mid-sized residential buildings in
              accessible, strategic locations.
            </p>

            <p className="px-8 pb-8 text-lg font-light  md:text-xl">
              Today, it owns and manages two commercial buildings along Aurora Boulevard, near Anonas MRT-3 and the
              future Metro Manila Subway, serving retail, dining, clinics, and BPO tenants.
            </p>
          </div>

          {/* COLLAGE */}
          <div className="relative mx-auto w-full max-w-lg md:col-span-5 md:col-start-6 md:max-w-none md:h-180 h-180 overflow-hidden ">
            <img src={Drone} className="absolute top-0 left-4 w-4/5 md:w-3/5 rounded-xl shadow-xl z-20" />
            <img
              src={Roof}
              className="absolute top-50 left-16 md:left-24 lg:left-36 w-4/5 md:w-3/5 rounded-xl shadow-lg z-30"
            />
            <img src={Sunset} className="absolute top-100 left-4 w-4/5 md:w-3/5 rounded-xl shadow-md z-20" />
          </div>
        </div>
      </section>

      {/* OUR CLIENTS SECTION */}
      <section>
        <ClientsSection />
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative mx-auto">
        <h1 className="text-4xl font-extrabold text-center p-10  from-gray-200 to-white bg-linear-to-b md:text-5xl">
          WHY CHOOSE US
        </h1>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ChooseUsCards src1={Trust} src2={Location} src3={Partner} />
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="relative mx-auto p-4 mt-15 w-full" id="blogs">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl text-center p-5 mt-10">LATEST BLOGS</h2>
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3 p-10">
          {latestBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`} viewTransition className="block h-full">
              <BlogCard image={blog.image} title={blog.title} />
            </Link>
          ))}
        </div>
      </section>
      {/* CONTACT US SECTION */}
      <section className="relative mt-15" id="contactus">
        <div className="">
          <Contact />
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl  font-bold pl-1 pb-5 mb-8 text-center md:text-left">Locations</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <MapCard
            title="J&F Divino Arcade"
            subtitle="Aurora Boulevard, Cubao, Quezon City"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61767.82160741428!2d121.0636527!3d14.6281696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b70050d1b233%3A0x849d5c02d28b7e8a!2sJ%26F%20Divino%20Arcade!5e0!3m2!1sen!2sph!4v1768845292428!5m2!1sen!2sph"
          />

          <MapCard
            title="Lolo Oboy’s Commercial Center"
            subtitle="J&F Divino Building, Cubao"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4880160122534!2d121.05942938648484!3d14.628217049406128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b790f2978129%3A0xa61b116f1440bc01!2sLolo%20Oboy&#39;s%20Commercial%20Center%20(J%26F%20Divino%20Building)!5e0!3m2!1sen!2sph!4v1768845786012!5m2!1sen!2sph"
          />
        </div>
      </section>
    </>
  );
}

export default App;
