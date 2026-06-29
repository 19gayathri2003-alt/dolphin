import Navbar from "./Navbar";
import ban1 from "../assets/ban1.JPG";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot.jsx";
function Contact() {
const [mapUrl, setMapUrl] = useState("");
const [showMsg, setShowMsg] = useState(false);
  useEffect(() => {
    fetch("https://dolphin-982t.onrender.com/map")
      .then(res => res.json())
      .then(data => {
        if (data) setMapUrl(data.mapUrl);
      });
  }, []);


  // ADD THIS STATE TOP
const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  message: ""
});

// HANDLE CHANGE
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

// SUBMIT
const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("https://dolphin-982t.onrender.com/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });

  const data = await res.json();

  if (data.success) {
  setShowMsg(true);

  setTimeout(() => {
    setShowMsg(false);
  }, 2000);

  setForm({ name: "", phone: "", email: "", message: "" });
} else {
  alert("Error ❌");
}
};

  return (
    <div>
      <Navbar />
        
            <div className="w-full bg-gray-50">
        
              {/* HERO */}
              <div className="relative w-full h-[380px]">
                <img
                  src={ban1}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
        
                <div className="absolute inset-0 bg-blue-900/70 flex flex-col items-center justify-center text-center text-white">
                  <h1 className="text-6xl font-extrabold mb-3">
                    Contact Us
                  </h1>
        
                  <p className="text-lg opacity-90">
                    We'd love to hear from you
                  </p>
                </div>
              </div>
              {/*  */}
      {/* CONTACT FORM + INFO */}
<div className="py-20 bg-gray-100 px-10">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

    {/* LEFT FORM */}
    <form onSubmit={handleSubmit} className="space-y-5">

      <h2 className="text-3xl font-bold mb-5">
        Send us a Message
      </h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-4 rounded-lg border"
        required
      />

      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-4 rounded-lg border"
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-4 rounded-lg border"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full p-4 rounded-lg border h-40"
        required
      ></textarea>

      <button className="w-full bg-blue-900 text-white py-4 rounded-lg">
        Send Message ✈️
      </button>

    </form>

    {/* RIGHT INFO */}
    <div className="space-y-6">

      <h2 className="text-3xl font-bold mb-5">
        Get in Touch
      </h2>

      <div className="bg-white p-5 rounded-xl shadow">
        <b>Address</b>
        <p>No.18A, Vijayapuram, Thiruvarur</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <b>Phone</b>
        <p>+91 96554 67791</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <b>Email</b>
        <p>info@dolphinschool.in</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <b>Working Hours</b>
        <p>Mon–Fri: 7:30am–7:30pm</p>
      </div>

    </div>

  </div>

</div>

              {/*  */}

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
      {showMsg && (
  <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow">
    ✅ Message Sent Successfully
  </div>
)}


        </div>

    </div>
  );
}
export default  Contact;