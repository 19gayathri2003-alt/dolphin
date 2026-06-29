import React, { useState, useEffect } from "react";

function Managegallery() {

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [label, setLabel] = useState("");
  const [gallery, setGallery] = useState([]);

  const fetchData = () => {
    fetch("https://dolphin-982t.onrender.com/gallery")
      .then(res => res.json())
      .then(data => setGallery(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);
    formData.append("label", label);

    await fetch("https://dolphin-982t.onrender.com/gallery", {
      method: "POST",
      body: formData,
    });

    setCategory("");
    setLabel("");
    setImage(null);

    fetchData();
  };

  const handleDelete = async (id) => {
    await fetch(`https://dolphin-982t.onrender.com/gallery/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Manage Gallery
      </h1>

      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-lg shadow mb-10"
      >

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block border p-2 mb-4 w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Events">Events</option>
          <option value="Sports">Sports</option>
          <option value="Annual Day">Annual Day</option>
          <option value="Campus">Campus</option>
        </select>

        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="block border p-2 mb-4 w-full"
          required
        />

        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Upload
        </button>

      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {gallery.map(item => (

          // 🔥 CHANGE 1: key
          <div key={item._id} className="relative">

            <img
              src={item.img}
              alt=""
              className="h-[200px] w-full object-cover rounded"
            />

            <button
              // 🔥 CHANGE 2: delete id
              onClick={() => handleDelete(item._id)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm"
            >
              Delete
            </button>

            <p className="mt-2 font-semibold text-center">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Managegallery;