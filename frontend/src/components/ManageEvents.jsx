import { useState, useEffect } from "react";

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    category: "",
    date: ""
  });

  const loadEvents = () => {
    fetch("https://dolphin-982t.onrender.com/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://dolphin-982t.onrender.com/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({ title: "", desc: "", category: "", date: "" });
    loadEvents();
  };

  const deleteEvent = async (id) => {
    await fetch(`https://dolphin-982t.onrender.com/events/${id}`, {
      method: "DELETE"
    });

    loadEvents();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded mb-8 space-y-4">

        <input name="title" placeholder="Title"
          value={form.title} onChange={handleChange}
          className="w-full border p-2 rounded" required />

        <input name="category" placeholder="Category"
          value={form.category} onChange={handleChange}
          className="w-full border p-2 rounded" required />

        <textarea name="desc" placeholder="Description"
          value={form.desc} onChange={handleChange}
          className="w-full border p-2 rounded" required />

        <input type="date" name="date"
          value={form.date} onChange={handleChange}
          className="w-full border p-2 rounded" required />

        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Add Event
        </button>

      </form>

      <div className="space-y-4">
        {events.map(e => (
          <div key={e._id} className="bg-gray-100 p-4 rounded shadow">

            <h2 className="font-bold">{e.title}</h2>
            <p>{e.category}</p>
            <p>{e.desc}</p>
            <p className="text-sm">{e.date}</p>

            <button
              onClick={() => deleteEvent(e._id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ManageEvents;