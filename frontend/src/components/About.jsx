import Navbar from "./Navbar";
import ban1 from "../assets/ban1.JPG";
import ban2 from "../assets/ban2.jpeg";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot.jsx";
import {
  BookOpen,
  Heart,
  Users,
  Star,
  Shield,
  Lightbulb
} from "lucide-react";

function About() {
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
            About Us
          </h1>

          <p className="text-lg opacity-90">
            Learn more about our school and values
          </p>
        </div>
      </div>


      {/* OUR STORY */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src={ban2}
            alt="students"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Dolphin Nursery & Primary School was established with a singular
            vision – to create a centre of learning excellence in Thiruvarur
            that would shape young minds into confident, capable, and
            compassionate individuals.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Over the years, we have grown into one of the most trusted
            educational institutions in the region, known for our commitment
            to academic excellence, character development, and holistic
            education.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our state-of-the-art facilities, experienced faculty, and
            innovative teaching methodologies ensure that every child
            receives the attention and guidance they need to reach
            their full potential.
          </p>
        </div>

      </div>


      {/* VISION MISSION */}
      <div className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To be a leading institution of primary education that inspires
              excellence, fosters creativity, and builds character in every
              child, preparing them to become responsible global citizens.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To provide a safe, nurturing, and stimulating environment
              where children develop a love for learning, build strong
              values, and acquire the skills needed to succeed in an
              ever-changing world.
            </p>
          </div>

        </div>

      </div>


      {/* CORE VALUES */}
      <div className="py-20 bg-gray-50">

        <div className="text-center mb-16">

          <p className="text-blue-700 font-semibold tracking-widest mb-2">
            WHAT WE STAND FOR
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900">
            Our Core Values
          </h2>

        </div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">


          {/* CARD */}
          <div className="bg-gray-100 p-8 rounded-xl">

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-4">
              <BookOpen className="text-blue-900" />
            </div>

            <h4 className="font-bold text-lg mb-2">
              Academic Excellence
            </h4>

            <p className="text-gray-600">
              Rigorous curriculum designed to challenge and inspire every student.
            </p>

          </div>


          <div className="bg-gray-100 p-8 rounded-xl">

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-4">
              <Heart className="text-blue-900" />
            </div>

            <h4 className="font-bold text-lg mb-2">
              Nurturing Care
            </h4>

            <p className="text-gray-600">
              A warm, supportive environment where every child feels valued.
            </p>

          </div>


          <div className="bg-gray-100 p-8 rounded-xl">

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-4">
              <Users className="text-blue-900" />
            </div>

            <h4 className="font-bold text-lg mb-2">
              Community
            </h4>

            <p className="text-gray-600">
              Strong partnerships between teachers, parents, and students.
            </p>

          </div>


          <div className="bg-gray-100 p-8 rounded-xl">

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-4">
              <Star className="text-blue-900" />
            </div>

            <h4 className="font-bold text-lg mb-2">
              Holistic Growth
            </h4>

            <p className="text-gray-600">
              Focus on intellectual, physical, emotional, and social development.
            </p>

          </div>


          <div className="bg-gray-100 p-8 rounded-xl">

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-4">
              <Shield className="text-blue-900" />
            </div>

            <h4 className="font-bold text-lg mb-2">
              Safe Environment
            </h4>

            <p className="text-gray-600">
              A secure campus with trained staff ensuring child safety.
            </p>

          </div>


          <div className="bg-gray-100 p-8 rounded-xl">

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-4">
              <Lightbulb className="text-blue-900" />
            </div>

            <h4 className="font-bold text-lg mb-2">
              Innovation
            </h4>

            <p className="text-gray-600">
              Modern teaching methods and technology-enhanced learning.
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
          © 2026 Dolphin Nursery & Primary School. All rights reserved.
        </div>

      </footer>
      <Chatbot />
    </div>
    </div>
  );
}

export default About;