import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ban1 from "../assets/ban1.JPG";
import ban2 from "../assets/ban2.jpeg";
import ban3 from "../assets/ban3.jpeg";
import ban4 from "../assets/ban4.jpg";
import Chatbot from "./Chatbot.jsx";

function Home() {

  const images = [ban1, ban2, ban3, ban4];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
const [leaders, setLeaders] = useState([]);
const [notes, setNotes] = useState([]);
const [mapUrl, setMapUrl] = useState("");
  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);
  // ✅ LEADER FETCH useEffect (SEPARATE)
useEffect(() => {
  fetch("http://localhost:5000/leaders")
    .then(res => res.json())
    .then(data => setLeaders(data));
}, []);

useEffect(() => {
  fetch("http://localhost:5000/notes")
    .then(res => res.json())
    .then(data => setNotes(data));
}, []);

useEffect(() => {
  fetch("http://localhost:5000/map")
    .then(res => res.json())
    .then(data => {
      if (data) setMapUrl(data.mapUrl);
    });
}, []);

  return (
    <div>
      <Navbar />
      
      {/* Banner */}
      <div className="relative w-full h-[650px] overflow-hidden">

        <img
          src={images[current]}
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* BLUE OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/60"></div>

        {/* TEXT CONTENT */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center max-w-2xl">

          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Welcome to Dolphin Nursery & Middle School
          </h1>

          <p className="text-lg mb-6">
            Nurturing Bright Futures with Care and Excellence
          </p>

          <div className="flex gap-4 justify-center">

            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Admission Details
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-black transition"
            >
              Contact Us
            </button>

          </div>

        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 bg-white px-3 py-2 rounded-full shadow z-10"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 bg-white px-3 py-2 rounded-full shadow z-10"
        >
          ❯
        </button>

      </div>
      {/* Banner */}

      {/* ✅ ABOUT SECTION (NEW - EXACT LIKE IMAGE) */}
      <div className="py-16 px-10 bg-gray-100">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={ban3}
              alt="students"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-blue-600 font-semibold mb-2">ABOUT US</p>

            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Building Tomorrow's Leaders Today
            </h2>

            <p className="text-gray-600 mb-4">
              At Dolphin Nursery & Primary School, we believe that every child is unique
              and capable of achieving greatness. Our holistic approach to education
              combines academic rigor with character development, creative expression,
              and physical fitness.
            </p>

            <p className="text-gray-600 mb-6">
              Founded with a vision to provide world-class education in Thiruvarur, we
              nurture young minds through innovative teaching methods, modern facilities,
              and a caring environment that encourages curiosity and lifelong learning.
            </p>

            {/* STATS */}
            <div className="flex gap-6">

              <div className="bg-white p-6 rounded-lg shadow text-center w-32">
                <h3 className="text-2xl font-bold text-blue-900">500+</h3>
                <p className="text-gray-500 text-sm">Students</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center w-32">
                <h3 className="text-2xl font-bold text-blue-900">50+</h3>
                <p className="text-gray-500 text-sm">Teachers</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center w-32">
                <h3 className="text-2xl font-bold text-blue-900">15+</h3>
                <p className="text-gray-500 text-sm">Years</p>
              </div>

            </div>

          </div>

        </div>

      </div>
      {/* ABOUT SECTION */}

    {/* LEADERSHIP SECTION */}
<div className="py-16 px-10 bg-gray-50">

  <p className="text-center text-blue-600 font-semibold mb-2">
    MEET OUR TEAM
  </p>

  <h2 className="text-4xl font-bold text-center mb-10">
    Our Leadership
  </h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {leaders.map((item) => (
      <div key={item._id} className="bg-white p-8 rounded-xl shadow text-center">

        <img
          src={item.img}
          alt=""
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        <h3 className="text-xl font-bold">{item.name}</h3>

        <p className="text-blue-600 font-semibold">
          {item.role}
        </p>

        <p className="text-gray-600 mt-4">
          "{item.desc}"
        </p>

      </div>
    ))}

  </div>

</div>
{/* NOTES SECTION */}



<div className="py-16 px-10 bg-gray-100">

  <p className="text-center text-blue-600 font-semibold mb-2">
    STAY UPDATED
  </p>

  <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
    Important Notices
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {notes.map((item) => (
      <div
        key={item._id}
        className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300"
      >

        {/* ICON */}
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <FaBell className="text-gray-600 text-lg" />
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {item.title}
        </h3>

        {/* DATE */}
        <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
          <FaCalendarAlt />
          {item.date ? item.date : "15 Mar 2026"}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</div>

{/* ADMISSIONS / ENQUIRE SECTION */}
<div className="bg-[#1e3557] text-white py-20 text-center">

  <div className="max-w-3xl mx-auto px-4">

    {/* ICON */}
    <div className="flex justify-center mb-4 text-4xl">
      🎓
    </div>

    {/* TITLE */}
    <h2 className="text-4xl font-bold mb-4">
      Admissions Open 2026–2027
    </h2>

    {/* DESCRIPTION */}
    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
      Give your child the best start in life. Join the Dolphin family and
      watch them thrive in a nurturing, excellence-driven environment.
    </p>

    {/* BUTTON */}
    <button
      onClick={() => navigate("/contact")}
      className="bg-white text-[#1e3557] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
    >
      Enquire Now
    </button>

  </div>

</div>

{/* MAP SECTION */}
<div className="py-16 px-10 bg-gray-50">

  <h2 className="text-3xl font-bold text-center mb-10">
    Our Location
  </h2>

  {mapUrl && (
    <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow">

      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="map"
      ></iframe>

    </div>
  )}

</div>
{/* CONTACT INFO SECTION */}
<div className="py-20 bg-gray-100 text-center">

  <p className="text-blue-600 font-semibold mb-2 tracking-wide">
    REACH OUT
  </p>

  <h2 className="text-4xl font-bold text-gray-900 mb-12">
    Contact Information
  </h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">

    {/* ADDRESS */}
    <div className="bg-gray-200 p-8 rounded-2xl hover:shadow-lg transition">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
        📍
      </div>

      <h3 className="font-bold text-lg mb-2">Address</h3>

      <p className="text-gray-600">
        I. P. Kovil Mela Street, Vijayapuram,<br />
        Thiruvarur, Tamil Nadu<br />
        610001
      </p>
    </div>

    {/* PHONE */}
    <div className="bg-gray-200 p-8 rounded-2xl hover:shadow-lg transition">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
        📞
      </div>

      <h3 className="font-bold text-lg mb-2">Phone</h3>

      <p className="text-gray-600">
        04366-212177
      </p>
    </div>

    {/* EMAIL */}
    <div className="bg-gray-200 p-8 rounded-2xl hover:shadow-lg transition">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
        ✉️
      </div>

      <h3 className="font-bold text-lg mb-2">Email</h3>

      <p className="text-gray-600">
        krgdolphin@gmail.com
      </p>
    </div>

    {/* HOURS */}
    <div className="bg-gray-200 p-8 rounded-2xl hover:shadow-lg transition">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
        🕒
      </div>

      <h3 className="font-bold text-lg mb-2">Hours</h3>

      <p className="text-gray-600">
        Mon–Fri: 7:30am–7:30pm
      </p>
    </div>

  </div>

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
          © 2026 Dolphin Nursery & Middle School. All rights reserved.
        </div>

      </footer>
      <Chatbot />

    </div>
  );
}

export default Home;