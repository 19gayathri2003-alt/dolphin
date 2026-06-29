import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

import {
  FaThLarge,
  FaImage,
  FaImages,
  FaTrophy,
  FaStickyNote,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaSignOutAlt
} from "react-icons/fa";

import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Legend
} from "recharts";

function Admin() {
  const navigate = useNavigate();
  const [showMsg, setShowMsg] = useState(false);

  const [stats, setStats] = useState({
    gallery: 0,
    events: 0,
    notes: 0,
    achievements: 0
  });

  const handleLogout = () => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
      navigate("/");
    }, 1500);
  };

  const fetchData = async () => {
    try {
      const [g, e, n, a] = await Promise.all([
        axios.get("https://dolphin-982t.onrender.com/gallery"),
        axios.get("https://dolphin-982t.onrender.com/events"),
        axios.get("https://dolphin-982t.onrender.com/notes"),
        axios.get("https://dolphin-982t.onrender.com/achievements"),
      ]);

      setStats({
        gallery: g.data.length,
        events: e.data.length,
        notes: n.data.length,
        achievements: a.data.length
      });

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  const chartData = [
    { name: "Gallery", value: stats.gallery },
    { name: "Events", value: stats.events },
    { name: "Notes", value: stats.notes },
    { name: "Achievements", value: stats.achievements },
  ];

  const COLORS = ["#1e3a8a", "#16a34a", "#9333ea", "#f97316"];

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#0f2747] text-white flex flex-col justify-between">

        <div>
          <div className="flex items-center gap-2 px-4 py-4 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-white text-[#0f2747] flex items-center justify-center font-bold text-sm">
              D
            </div>
            <h1 className="text-base font-semibold">Admin Panel</h1>
          </div>

          <div className="px-2 py-3 space-y-1 text-sm">

            <Link to="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20">
              <FaThLarge size={14} /> Dashboard
            </Link>

            <Link to="/admin/managecontact" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaImage size={14} /> Manage Contact
            </Link>

            <Link to="/admin/managegallery" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaImages size={14} /> Manage Gallery
            </Link>

            <Link to="/admin/manageachievements" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaTrophy size={14} /> Manage Achievements
            </Link>

            <Link to="/admin/notes" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaStickyNote size={14} /> Manage Notes
            </Link>

            <Link to="/admin/events" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaCalendarAlt size={14} /> Manage Events
            </Link>

            <Link to="/admin/manageleader" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaUsers size={14} /> Manage Leadership
            </Link>

            <Link to="/admin/map" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/20">
              <FaMapMarkerAlt size={14} /> Manage Map
            </Link>

          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-4 text-sm">
          <p className="text-gray-300 text-xs">Logged in as</p>
          <p className="font-semibold mb-3">Admin</p>

          <button onClick={handleLogout} className="flex items-center gap-2 hover:text-red-400">
            <FaSignOutAlt size={14} /> Logout
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 p-6 bg-gray-100">
        {window.location.pathname === "/admin" ? (

          <div>

            {/* HEADER */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#0f2747]">
                Welcome, Admin 👋
              </h1>
              <p className="text-gray-500">
                Here's your dashboard overview
              </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-6 mb-10">

              <div className="bg-[#0f2747] text-white p-6 rounded-xl flex items-center gap-4">
                <FaImages size={28} />
                <div>
                  <h2 className="text-2xl font-bold">{stats.gallery}</h2>
                  <p className="text-sm opacity-80">Total Gallery Media</p>
                </div>
              </div>

              <div className="bg-[#0f2747] text-white p-6 rounded-xl flex items-center gap-4">
                <FaCalendarAlt size={28} />
                <div>
                  <h2 className="text-2xl font-bold">{stats.events}</h2>
                  <p className="text-sm opacity-80">Total Events</p>
                </div>
              </div>

              <div className="bg-[#0f2747] text-white p-6 rounded-xl flex items-center gap-4">
                <FaStickyNote size={28} />
                <div>
                  <h2 className="text-2xl font-bold">{stats.notes}</h2>
                  <p className="text-sm opacity-80">Total Notes</p>
                </div>
              </div>

              <div className="bg-[#0f2747] text-white p-6 rounded-xl flex items-center gap-4">
                <FaTrophy size={28} />
                <div>
                  <h2 className="text-2xl font-bold">{stats.achievements}</h2>
                  <p className="text-sm opacity-80">Achievements</p>
                </div>
              </div>

            </div>

            {/* PROGRESS */}
            <div className="bg-white p-6 rounded-xl shadow mb-10">
              <h2 className="font-semibold mb-4">📊 Media Statistics</h2>

              {chartData.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="h-2 rounded"
                      style={{
                        width: `${item.value * 10}%`,
                        backgroundColor: COLORS[i]
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-2 gap-8">

              {/* PIE */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="font-semibold mb-4 text-center">Distribution</h2>
                <PieChart width={350} height={260}>
                  <Pie data={chartData} dataKey="value" outerRadius={90} label>
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>

              {/* BAR */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="font-semibold mb-4 text-center">Bar Analysis</h2>
                <BarChart width={350} height={260} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#0f2747" />
                </BarChart>
              </div>

            </div>

          </div>

        ) : (
          <Outlet />
        )}
      </div>

      {showMsg && (
        <div className="fixed bottom-4 right-4 bg-[#0f2747] text-white px-4 py-2 rounded-md text-sm shadow">
          ✅ Logged out successfully
        </div>
      )}

    </div>
  );
}

export default Admin;