// src/components/ClientsSection.jsx
import React from "react";
import Jollibee from "../assets/images/jollibee.png";
import Shakeys from "../assets/images/shakeys.png";
import Prestige from "../assets/images/prestige.png";
import Dentist from "../assets/images/delos.jpg";
import Thinksafe from "../assets/images/thinksafe.jpg";
import Beautystudio from "../assets/images/beautystudio.jpg";
import Primemedia from "../assets/images/primemedia.jpg";
import Mercury from "../assets/images/mercury.png";
import Goldilocks from "../assets/images/goldilocks.jpg";
import Consulting from "../assets/images/consulting.jpg";

const clients = [
  {name: "Jollibee", src: Jollibee},
  {name: "Shakeys", src: Shakeys},
  {name: "Mercury Drug", src: Mercury},
  {name: "Goldilocks", src: Goldilocks},
  {name: "Prestige", src: Prestige},
  {name: "Dentist", src: Dentist},
  {name: "Thinksafe", src: Thinksafe},
  {name: "Beauty Studio", src: Beautystudio},
  {name: "Prime Media", src: Primemedia},
  {name: "Consulting", src: Consulting},
];

export default function ClientsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-wide text-neutral-900 md:text-5xl">OUR CLIENTS</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 md:text-base">
            Some of our partner establishments that have found success in our prime location.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center md:flex md:flex-wrap justify-center gap-x-16 gap-y-12">
          {clients.map((c) => (
            <div key={c.name} className="flex w-auto items-center justify-center">
              <img src={c.src} alt={c.name} className="max-h-20 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
