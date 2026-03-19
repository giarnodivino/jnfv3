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
  homePic,
} from "../assets/images/allImages";
import Contact from "../components/contact";
import { MapCard, ACcard, ChooseUsCards } from "../components/cards";
import ClientsSection from "../components/tenants";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router";
import pattern from "../assets/icons/pattern.svg";
import patternLg from "../assets/icons/pattern-lg.svg";

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
      <section
        className="relative w-full overflow-hidden bg-[#A36C2E] px-4 pt-20 pb-12 min-h-svh md:min-h-screen"
        id="home"
      >
        <div
          className="absolute inset-0 opacity-40 pointer-events-none bg-cover bg-center lg:hidden"
          style={{ backgroundImage: `url(${pattern})` }}
        />

        <div
          className="lg:absolute lg:inset-0 lg:opacity-40 lg:pointer-events-none lg:bg-cover lg:bg-center"
          style={{ backgroundImage: `url(${patternLg})` }}
        />

        {/* content */}
        <div className="relative z-10 flex h-full flex-col justify-center pt-18.75 text-center text-white lg:grid lg:grid-cols-2 lg:items-center lg:mt-20 lg:ml-15 lg:mr-15">
          <div className="col-span-1 justify-center lg:text-left p-5">
            <h1 className="mx-auto mt-10 max-w-md md:max-w-5xl text-5xl lg:text-6xl font-extrabold leading-tight">
              Commercial Property for Lease
            </h1>

            <h2 className="mx-auto mt-8 sm:max-w-lg font-thin md:max-w-3xl px-2 text-2xl leading-relaxed lg:mr-10">
              Offering 3786 square meters of commercial spaces along Aurora Boulevard in a prime location in Cubao
              Quezon City
            </h2>

            <div className="mt-7 flex gap-4 pt-6 justify-center lg:justify-start">
              <a href="#contactus">
                <svg width="193" height="70" viewBox="0 0 193 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="193" height="70" rx="8" fill="#F7F2E2" />
                  <path
                    d="M52.1193 33H50.5341C50.4403 32.544 50.2763 32.1435 50.0419 31.7983C49.8118 31.4531 49.5305 31.1634 49.1982 30.929C48.87 30.6903 48.5057 30.5114 48.1051 30.392C47.7045 30.2727 47.2869 30.2131 46.8523 30.2131C46.0597 30.2131 45.3416 30.4134 44.6982 30.8139C44.0589 31.2145 43.5497 31.8047 43.1705 32.5845C42.7955 33.3643 42.608 34.321 42.608 35.4545C42.608 36.5881 42.7955 37.5447 43.1705 38.3246C43.5497 39.1044 44.0589 39.6946 44.6982 40.0952C45.3416 40.4957 46.0597 40.696 46.8523 40.696C47.2869 40.696 47.7045 40.6364 48.1051 40.517C48.5057 40.3977 48.87 40.2209 49.1982 39.9865C49.5305 39.7479 49.8118 39.456 50.0419 39.1108C50.2763 38.7614 50.4403 38.3608 50.5341 37.9091H52.1193C52 38.5781 51.7827 39.1768 51.4673 39.7053C51.152 40.2337 50.7599 40.6832 50.2912 41.054C49.8224 41.4205 49.2962 41.6996 48.7124 41.8913C48.1328 42.0831 47.5128 42.179 46.8523 42.179C45.7358 42.179 44.7429 41.9062 43.8736 41.3608C43.0043 40.8153 42.3203 40.0398 41.8217 39.0341C41.3232 38.0284 41.0739 36.8352 41.0739 35.4545C41.0739 34.0739 41.3232 32.8807 41.8217 31.875C42.3203 30.8693 43.0043 30.0938 43.8736 29.5483C44.7429 29.0028 45.7358 28.7301 46.8523 28.7301C47.5128 28.7301 48.1328 28.826 48.7124 29.0178C49.2962 29.2095 49.8224 29.4908 50.2912 29.8615C50.7599 30.228 51.152 30.6754 51.4673 31.2038C51.7827 31.728 52 32.3267 52.1193 33ZM58.105 42.2045C57.2187 42.2045 56.441 41.9936 55.7719 41.5717C55.1072 41.1499 54.5873 40.5597 54.2123 39.8011C53.8415 39.0426 53.6562 38.1562 53.6562 37.142C53.6562 36.1193 53.8415 35.2266 54.2123 34.4638C54.5873 33.701 55.1072 33.1087 55.7719 32.6868C56.441 32.2649 57.2187 32.054 58.105 32.054C58.9914 32.054 59.767 32.2649 60.4317 32.6868C61.1008 33.1087 61.6206 33.701 61.9914 34.4638C62.3664 35.2266 62.5539 36.1193 62.5539 37.142C62.5539 38.1562 62.3664 39.0426 61.9914 39.8011C61.6206 40.5597 61.1008 41.1499 60.4317 41.5717C59.767 41.9936 58.9914 42.2045 58.105 42.2045ZM58.105 40.8494C58.7783 40.8494 59.3323 40.6768 59.767 40.3317C60.2016 39.9865 60.5233 39.5327 60.7322 38.9702C60.941 38.4077 61.0454 37.7983 61.0454 37.142C61.0454 36.4858 60.941 35.8743 60.7322 35.3075C60.5233 34.7408 60.2016 34.2827 59.767 33.9332C59.3323 33.5838 58.7783 33.4091 58.105 33.4091C57.4317 33.4091 56.8777 33.5838 56.4431 33.9332C56.0084 34.2827 55.6867 34.7408 55.4779 35.3075C55.2691 35.8743 55.1647 36.4858 55.1647 37.142C55.1647 37.7983 55.2691 38.4077 55.4779 38.9702C55.6867 39.5327 56.0084 39.9865 56.4431 40.3317C56.8777 40.6768 57.4317 40.8494 58.105 40.8494ZM66.0051 36.0938V42H64.4966V32.1818H65.954V33.7159H66.0818C66.312 33.2173 66.6614 32.8168 67.1301 32.5142C67.5989 32.2074 68.204 32.054 68.9455 32.054C69.6103 32.054 70.1919 32.1903 70.6905 32.4631C71.1891 32.7315 71.5769 33.1406 71.8539 33.6903C72.1309 34.2358 72.2693 34.9261 72.2693 35.7614V42H70.7608V35.8636C70.7608 35.0923 70.5605 34.4915 70.16 34.0611C69.7594 33.6264 69.2097 33.4091 68.5108 33.4091C68.0293 33.4091 67.5989 33.5135 67.2196 33.7223C66.8446 33.9311 66.5485 34.2358 66.3311 34.6364C66.1138 35.0369 66.0051 35.5227 66.0051 36.0938ZM78.9358 32.1818V33.4602H73.8477V32.1818H78.9358ZM75.3307 29.8295H76.8392V39.1875C76.8392 39.6136 76.901 39.9332 77.0246 40.1463C77.1524 40.3551 77.3144 40.4957 77.5104 40.5682C77.7107 40.6364 77.9216 40.6705 78.1432 40.6705C78.3094 40.6705 78.4457 40.6619 78.5523 40.6449C78.6588 40.6236 78.744 40.6065 78.808 40.5938L79.1148 41.9489C79.0125 41.9872 78.8697 42.0256 78.6865 42.0639C78.5033 42.1065 78.271 42.1278 77.9898 42.1278C77.5636 42.1278 77.146 42.0362 76.7369 41.853C76.3321 41.6697 75.9955 41.3906 75.727 41.0156C75.4628 40.6406 75.3307 40.1676 75.3307 39.5966V29.8295ZM83.7342 42.2301C83.112 42.2301 82.5474 42.1129 82.0403 41.8786C81.5332 41.6399 81.1305 41.2969 80.8322 40.8494C80.5339 40.3977 80.3848 39.8523 80.3848 39.2131C80.3848 38.6506 80.4955 38.1946 80.7171 37.8452C80.9387 37.4915 81.2349 37.2145 81.6056 37.0142C81.9764 36.8139 82.3855 36.6648 82.8329 36.5668C83.2846 36.4645 83.7384 36.3835 84.1944 36.3239C84.791 36.2472 85.2747 36.1896 85.6454 36.1513C86.0204 36.1087 86.2931 36.0384 86.4636 35.9403C86.6383 35.8423 86.7257 35.6719 86.7257 35.429V35.3778C86.7257 34.7472 86.5531 34.2571 86.2079 33.9077C85.867 33.5582 85.3492 33.3835 84.6546 33.3835C83.9345 33.3835 83.3698 33.5412 82.9607 33.8565C82.5517 34.1719 82.264 34.5085 82.0978 34.8665L80.666 34.3551C80.9217 33.7585 81.2626 33.294 81.6887 32.9616C82.1191 32.625 82.5879 32.3906 83.095 32.2585C83.6063 32.1222 84.1092 32.054 84.6035 32.054C84.9188 32.054 85.2811 32.0923 85.6902 32.169C86.1035 32.2415 86.5019 32.3928 86.8855 32.6229C87.2732 32.853 87.595 33.2003 87.8507 33.6648C88.1063 34.1293 88.2342 34.7514 88.2342 35.5312V42H86.7257V40.6705H86.649C86.5467 40.8835 86.3762 41.1115 86.1376 41.3544C85.899 41.5973 85.5815 41.804 85.1852 41.9744C84.7889 42.1449 84.3052 42.2301 83.7342 42.2301ZM83.9643 40.875C84.5609 40.875 85.0637 40.7578 85.4728 40.5234C85.8862 40.2891 86.1973 39.9865 86.4061 39.6158C86.6191 39.245 86.7257 38.8551 86.7257 38.446V37.0653C86.6617 37.142 86.5211 37.2124 86.3038 37.2763C86.0907 37.3359 85.8436 37.3892 85.5623 37.4361C85.2853 37.4787 85.0147 37.517 84.7505 37.5511C84.4906 37.581 84.2796 37.6065 84.1177 37.6278C83.7257 37.679 83.3592 37.7621 83.0183 37.8771C82.6816 37.9879 82.4089 38.1562 82.2001 38.3821C81.9955 38.6037 81.8933 38.9062 81.8933 39.2898C81.8933 39.8139 82.0872 40.2102 82.475 40.4787C82.867 40.7429 83.3634 40.875 83.9643 40.875ZM94.6162 42.2045C93.6957 42.2045 92.9031 41.9872 92.2384 41.5526C91.5736 41.1179 91.0622 40.5192 90.7043 39.7564C90.3463 38.9936 90.1673 38.1222 90.1673 37.142C90.1673 36.1449 90.3506 35.2649 90.717 34.5021C91.0878 33.7351 91.6034 33.1364 92.2639 32.706C92.9287 32.2713 93.7043 32.054 94.5906 32.054C95.281 32.054 95.9031 32.1818 96.4571 32.4375C97.0111 32.6932 97.4649 33.0511 97.8186 33.5114C98.1723 33.9716 98.3918 34.5085 98.477 35.1222H96.9685C96.8534 34.6747 96.5977 34.2784 96.2014 33.9332C95.8094 33.5838 95.281 33.4091 94.6162 33.4091C94.0281 33.4091 93.5125 33.5625 93.0693 33.8693C92.6304 34.1719 92.2874 34.6001 92.0402 35.1541C91.7973 35.7038 91.6759 36.3494 91.6759 37.0909C91.6759 37.8494 91.7952 38.5099 92.0338 39.0724C92.2767 39.6349 92.6176 40.0717 93.0565 40.3828C93.4997 40.6939 94.0196 40.8494 94.6162 40.8494C95.0082 40.8494 95.3641 40.7812 95.6837 40.6449C96.0033 40.5085 96.2739 40.3125 96.4955 40.0568C96.717 39.8011 96.8747 39.4943 96.9685 39.1364H98.477C98.3918 39.7159 98.1808 40.2379 97.8442 40.7024C97.5118 41.1626 97.0707 41.5291 96.521 41.8018C95.9756 42.0703 95.3406 42.2045 94.6162 42.2045ZM104.592 32.1818V33.4602H99.5041V32.1818H104.592ZM100.987 29.8295H102.496V39.1875C102.496 39.6136 102.557 39.9332 102.681 40.1463C102.809 40.3551 102.971 40.4957 103.167 40.5682C103.367 40.6364 103.578 40.6705 103.8 40.6705C103.966 40.6705 104.102 40.6619 104.209 40.6449C104.315 40.6236 104.4 40.6065 104.464 40.5938L104.771 41.9489C104.669 41.9872 104.526 42.0256 104.343 42.0639C104.16 42.1065 103.927 42.1278 103.646 42.1278C103.22 42.1278 102.802 42.0362 102.393 41.853C101.988 41.6697 101.652 41.3906 101.383 41.0156C101.119 40.6406 100.987 40.1676 100.987 39.5966V29.8295ZM119.999 28.9091H121.584V37.5767C121.584 38.4716 121.374 39.2706 120.952 39.9737C120.534 40.6726 119.944 41.2244 119.181 41.6293C118.418 42.0298 117.523 42.2301 116.496 42.2301C115.469 42.2301 114.575 42.0298 113.812 41.6293C113.049 41.2244 112.457 40.6726 112.035 39.9737C111.617 39.2706 111.408 38.4716 111.408 37.5767V28.9091H112.994V37.4489C112.994 38.0881 113.134 38.657 113.415 39.1555C113.697 39.6499 114.097 40.0398 114.617 40.3253C115.141 40.6065 115.768 40.7472 116.496 40.7472C117.225 40.7472 117.852 40.6065 118.376 40.3253C118.9 40.0398 119.3 39.6499 119.577 39.1555C119.859 38.657 119.999 38.0881 119.999 37.4489V28.9091ZM131.14 34.3807L129.785 34.7642C129.7 34.5384 129.574 34.3189 129.408 34.1058C129.246 33.8885 129.024 33.7095 128.743 33.5689C128.462 33.4283 128.102 33.358 127.663 33.358C127.062 33.358 126.561 33.4964 126.161 33.7734C125.764 34.0462 125.566 34.3935 125.566 34.8153C125.566 35.1903 125.703 35.4865 125.975 35.7038C126.248 35.9212 126.674 36.1023 127.254 36.2472L128.711 36.6051C129.589 36.8182 130.243 37.1442 130.674 37.5831C131.104 38.0178 131.319 38.5781 131.319 39.2642C131.319 39.8267 131.157 40.3295 130.833 40.7727C130.514 41.2159 130.066 41.5653 129.491 41.821C128.916 42.0767 128.247 42.2045 127.484 42.2045C126.482 42.2045 125.654 41.9872 124.997 41.5526C124.341 41.1179 123.926 40.483 123.751 39.6477L125.183 39.2898C125.319 39.8182 125.577 40.2145 125.956 40.4787C126.34 40.7429 126.84 40.875 127.458 40.875C128.161 40.875 128.72 40.7259 129.133 40.4276C129.551 40.125 129.759 39.7628 129.759 39.3409C129.759 39 129.64 38.7145 129.402 38.4844C129.163 38.25 128.796 38.0753 128.302 37.9602L126.666 37.5767C125.767 37.3636 125.106 37.0334 124.684 36.5859C124.267 36.1342 124.058 35.5696 124.058 34.892C124.058 34.3381 124.213 33.848 124.524 33.4219C124.84 32.9957 125.268 32.6612 125.809 32.4183C126.355 32.1754 126.973 32.054 127.663 32.054C128.634 32.054 129.397 32.267 129.951 32.6932C130.509 33.1193 130.906 33.6818 131.14 34.3807Z"
                    fill="black"
                  />
                  <path d="M143 35H153" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M148 30L153 35L148 40" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-20 md:max-w-4xl lg:max-w-xl mx-auto">
            <img src={homePic} alt="" className="rounded-3xl" />
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
