import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ban1 from "../assets/ban1.JPG";
import Chatbot from "./Chatbot.jsx";
function Gallery() {

  const [filter, setFilter] = useState("All");
  const [images, setImages] = useState([]);

  // 🔥 FETCH DATA FROM BACKEND
  useEffect(() => {
    fetch("https://dolphin-982t.onrender.com/gallery")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.log("Fetch error:", err));
  }, []);

  // FILTER LOGIC
  const filtered =
    filter === "All"
      ? images
      : images.filter(item => item.category === filter);

  return (
    <div>
      <Navbar />

      <div className="w-full bg-gray-100">

        {/* HERO */}
        <div className="relative h-[350px]">

          <img
            src={ban1}
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-center items-center text-white text-center">

            <h1 className="text-5xl font-bold mb-2">
              Gallery
            </h1>

            <p className="text-lg">
              Moments captured at Dolphin School
            </p>

          </div>

        </div>


        {/* FILTER */}
        <div className="flex justify-center gap-4 py-12 flex-wrap">

          {["All","Events","Sports","Annual Day","Campus"].map(btn =>(

            <button
              key={btn}
              onClick={()=>setFilter(btn)}
              className={`px-6 py-2 rounded-full font-medium
              ${filter===btn
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-700"}`}
            >
              {btn}
            </button>

          ))}

        </div>


        {/* IMAGE GRID */}
        <div className="max-w-7xl mx-auto px-8 pb-20 grid grid-cols-2 md:grid-cols-4 gap-6">

          {filtered.length === 0 ? (
            <p className="col-span-4 text-center text-gray-500">
              No images found
            </p>
          ) : (

            filtered.map((item)=>(

              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >

                <img
                  src={item.img}
                  className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
                  alt=""
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition duration-500"></div>

                {/* TEXT */}
                <div className="absolute bottom-3 right-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </div>

              </div>

            ))

          )}

        </div>


        {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

          <div>

      <div className="flex items-center gap-3 mb-4">

        <div className="w-12 h-12 min-w-[48px] min-h-[48px] bg-white text-blue-900 flex items-center justify-center rounded-full font-bold text-xl">
          D
        </div>

        <h3 className="text-xl font-bold">
          Dolphin Nursery & Primary School
        </h3>

      </div>

      <p className="text-gray-300">
        Nurturing bright futures with care and excellence since our
        founding. Building tomorrow's leaders today.
      </p>

    </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-300">

  <li>
    <Link to="/" className="hover:text-white">
      Home
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-white">
      About Us
    </Link>
  </li>

  <li>
    <Link to="/achievements" className="hover:text-white">
      Achievements
    </Link>
  </li>

  <li>
    <Link to="/gallery" className="hover:text-white">
      Gallery
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-white">
      Contact
    </Link>
  </li>

</ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>

            <p className="text-gray-300">
             I. P. Kovil Mela Street, Vijayapuram,
              <br />
              Thiruvarur, Tamil Nadu 610001
            </p>

            <p className="text-gray-300 mt-2">
              04366-212177
            </p>

            <p className="text-gray-300 mt-2">
              krgdolphin@gmail.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Working Hours</h4>

            <ul className="space-y-1 text-gray-300">
              <li>Monday : 7:30am – 7:30pm</li>
              <li>Tuesday : 7:30am – 7:30pm</li>
              <li>Wednesday : 7:30am – 7:30pm</li>
              <li>Thursday : 7:30am – 7:30pm</li>
              <li>Friday : 7:30am – 7:30pm</li>
              <li className="text-red-400">Saturday : Closed</li>
              <li className="text-red-400">Sunday : Closed</li>
            </ul>
          </div>

        </div>

        {/* LINE */}
        <div className="max-w-7xl mx-auto mt-12 border-t border-blue-800 pt-6 text-center text-gray-400">
          © 2026 Dolphin Nursery & Primary School. All rights reserved.
        </div>

      </footer>
          <Chatbot />

      </div>
    </div>
  );
}

export default Gallery;