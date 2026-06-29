import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageAchievements() {
  const [form, setForm] = useState({
    category: "",
    year: "",
    title: "",
    desc: "",
    image: null,
  });

  const [data, setData] = useState([]);

  // FETCH
  const fetchData = async () => {
    const res = await axios.get("https://dolphin-982t.onrender.com/achievements");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("category", form.category);
    formData.append("year", form.year);
    formData.append("title", form.title);
    formData.append("desc", form.desc);
    formData.append("image", form.image);

    await axios.post("https://dolphin-982t.onrender.com/achievements", formData);

    fetchData();
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`https://dolphin-982t.onrender.com/achievements/${id}`);
    fetchData();
  };

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">Manage Achievements</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">

        <select
  className="border p-2 w-full"
  value={form.category}
  onChange={(e)=>setForm({...form, category:e.target.value})}
  required
>
  <option value="">Select Category</option>
  <option value="Academic">Academic</option>
  <option value="Sports">Sports</option>
  <option value="Cultural">Cultural</option>
  <option value="Awards">Awards</option>
</select>

        <input placeholder="Year"
          onChange={(e)=>setForm({...form, year:e.target.value})}
          className="border p-2 w-full" required />

        <input placeholder="Title"
          onChange={(e)=>setForm({...form, title:e.target.value})}
          className="border p-2 w-full" required />

        <textarea placeholder="Description"
          onChange={(e)=>setForm({...form, desc:e.target.value})}
          className="border p-2 w-full" required />

        <input type="file"
          onChange={(e)=>setForm({...form, image:e.target.files[0]})}
          className="border p-2 w-full" required />

        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Add Achievement
        </button>

      </form>

      {/* PREVIEW */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map(item => (
          <div key={item._id} className="bg-white p-4 shadow rounded">

            <img src={item.img}  alt={item.title} className="h-40 w-full object-cover mb-3" />

            <h3 className="font-bold">{item.title}</h3>
            <p>{item.category} • {item.year}</p>

            <button
              onClick={()=>handleDelete(item._id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ManageAchievements;