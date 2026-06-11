import React, { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 Welcome to Dolphin School. How can I help you?", from: "bot" }
  ]);

  const [input, setInput] = useState("");

  // ✅ IMPROVED REPLIES
  const replies = {
    admission: "🎓 Admissions for 2026–2027 are now open!\nWe welcome students from LKG to Class V.\n👉 Visit our campus or contact us for enrollment details.",
    fees: "💰 Fee structure varies based on class.\nWe ensure affordable and quality education.\n👉 Please contact our office for full details.",
    timing: "🕒 School Timings:\nMonday – Friday: 7:30 AM to 7:30 PM\nSaturday & Sunday: Closed",
    location: "📍 We are located at:\nNo.18A, Vijayapuram,\nThiruvarur, Tamil Nadu - 610001",
    contact: "📞 Contact Us:\nPhone: +91 96554 67791\nEmail: info@dolphinschool.in\n👉 Feel free to reach out anytime!",
  };

  // ✅ IMPROVED FALLBACK
  const defaultReply =
    "😊 I'm here to help! You can ask about:\n👉 Admissions\n👉 Fees\n👉 School Timings\n👉 Location\n👉 Contact Details";

  const sendMessage = (msg) => {
    if (!msg.trim()) return;

    const userMsg = { text: msg, from: "user" };

    let botReply = defaultReply;

    if (msg.toLowerCase().includes("admission")) botReply = replies.admission;
    else if (msg.toLowerCase().includes("fee")) botReply = replies.fees;
    else if (msg.toLowerCase().includes("timing")) botReply = replies.timing;
    else if (msg.toLowerCase().includes("location")) botReply = replies.location;
    else if (msg.toLowerCase().includes("contact")) botReply = replies.contact;

    setMessages(prev => [...prev, userMsg, { text: botReply, from: "bot" }]);
    setInput("");
  };

  return (
    <div>

      {/* ✅ FLOATING BUTTON WITH ANIMATION */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg animate-bounce hover:scale-110 transition"
        >
          <FaRobot size={20} />
        </button>
      )}

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-xl flex flex-col border">

          {/* HEADER */}
          <div className="bg-blue-900 text-white p-3 flex justify-between items-center rounded-t-xl">
            <div>
              <h3 className="font-bold">Dolphin Assistant</h3>
              <p className="text-xs text-gray-200">Online</p>
            </div>
            <FaTimes onClick={() => setOpen(false)} className="cursor-pointer hover:text-red-300" />
          </div>

          {/* MESSAGES */}
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] whitespace-pre-line ${
                  msg.from === "bot"
                    ? "bg-gray-200"
                    : "bg-blue-900 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* QUICK BUTTONS */}
          <div className="flex flex-wrap gap-2 p-2">
            {["Admission", "Fees", "Timing", "Location", "Contact"].map(btn => (
              <button
                key={btn}
                onClick={() => sendMessage(btn)}
                className="bg-gray-200 px-3 py-1 rounded-full text-xs hover:bg-blue-100"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
            />
            <button
              onClick={() => sendMessage(input)}
              className="ml-2 bg-blue-900 text-white p-2 rounded hover:bg-blue-700"
            >
              <FaPaperPlane size={12} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Chatbot;