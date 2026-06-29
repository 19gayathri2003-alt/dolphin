import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ban1 from "../assets/ban1.JPG";
import { Link } from "react-router-dom";
import axios from "axios";
import Chatbot from "./Chatbot.jsx";
function Achievements() {

  const [filter, setFilter] = useState("All");

  // 🔥 BACKEND DATA
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get("https://dolphin-982t.onrender.com/achievements")
      .then(res => setAchievements(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered =
    filter === "All"
      ? achievements
      : achievements.filter(item => item.category === filter);

  return (
    <div>
      <Navbar />
    <div className="bg-gray-100 w-full">

      {/* HERO */}

      <div className="relative h-[350px]">
        <img
          src={ban1}
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold">Achievements</h1>
          <p className="text-lg">Celebrating our students' successes</p>
        </div>
      </div>

      {/* FILTER BUTTONS */}

      <div className="flex justify-center gap-4 py-12 flex-wrap">

        {["All","Academic","Sports","Cultural","Awards"].map(btn=>(
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

      {/* ACHIEVEMENTS */}

      <div className="max-w-7xl mx-auto px-8 pb-20 space-y-16">

        {filtered.map((item,index)=>(

          <div
            key={item._id}
            className="grid md:grid-cols-2 gap-10 items-center"
          >

            {index % 2 === 0 ? (
              <>
                <img
                  src={item.img}
                  className="w-full h-[300px] object-cover rounded-xl"
                  alt=""
                />

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <p className="text-blue-700 font-semibold mb-2">
                    {item.category?.toUpperCase()} • {item.year}
                  </p>

                  <h2 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <p className="text-blue-700 font-semibold mb-2">
                    {item.category?.toUpperCase()} • {item.year}
                  </p>

                  <h2 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>

                <img
                  src={item.img}
                  className="w-full h-[300px] object-cover rounded-xl"
                  alt=""
                />
              </>
            )}

          </div>

        ))}

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

export default Achievements;