import React, { useState, useEffect } from "react";

const ManageNotes = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchData = () => {
    fetch("https://dolphin-982t.onrender.com/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    await fetch("https://dolphin-982t.onrender.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, desc, date }),
    });

    setTitle("");
    setDesc("");
    setDate("");

    fetchData();
  };

  const handleDelete = async (id) => {
    await fetch(`https://dolphin-982t.onrender.com/notes/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Manage Notes
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block border p-2 mb-4 w-full"
          required
        />

        <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="block border p-2 mb-4 w-full"
  required
/>

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="block border p-2 mb-4 w-full"
          required
        />

        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Add Note
        </button>

      </form>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-6">

        {notes.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow">

            <h3 className="font-bold text-lg">{item.title}</h3>

            <p className="text-sm text-gray-500 mb-2">
              {item.date}
            </p>

            <p className="text-gray-600">
              {item.desc}
            </p>

            <button
              onClick={() => handleDelete(item._id)}
              className="mt-3 bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ManageNotes;