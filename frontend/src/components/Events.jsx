import Navbar from "./Navbar";
import ban1 from "../assets/ban1.JPG";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot.jsx";
function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return {
      day: d.getDate(),
      month: d.toLocaleString("default", { month: "short" })
    };
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[380px]">
              <img
                src={ban1}
                alt="banner"
                className="w-full h-full object-cover"
              />
      
              <div className="absolute inset-0 bg-blue-900/70 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-6xl font-extrabold mb-3">
                 Events Calendar
                </h1>
      
                <p className="text-lg opacity-90">
                  Stay updated with school events and activities
                </p>
              </div>
            </div>

      <div className="bg-gray-50 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-3xl font-bold mb-12 text-center">
            Upcoming Events
          </h1>

          {/* GRID LAYOUT */}
          <div className="grid md:grid-cols-2 gap-8">

            {events.map(e => {
              const { day, month } = formatDate(e.date);

              return (
                <div
                  key={e._id}
                  className="bg-white rounded-2xl shadow-md p-6 flex gap-5 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >

                  {/* DATE BOX */}
                  <div className="bg-blue-50 w-16 h-16 flex flex-col justify-center items-center rounded-xl">
                    <p className="text-xs text-gray-500">{month}</p>
                    <p className="font-bold text-lg">{day}</p>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <h2 className="text-lg font-semibold text-gray-800">
                      {e.title}
                    </h2>

                    {/* CATEGORY */}
                    {e.category && (
                      <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {e.category}
                      </span>
                    )}

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                      {e.desc || "No description available"}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
           
            
        </div><br></br><br></br>
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

export default Events;