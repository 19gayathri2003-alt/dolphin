import React, { useState, useEffect } from "react";

function Manageleader() {

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");
  const [leaders, setLeaders] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/leaders")
      .then(res => res.json())
      .then(data => setLeaders(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("role", role);
    formData.append("desc", desc);

    await fetch("http://localhost:5000/leaders", {
      method: "POST",
      body: formData,
    });

    setName("");
    setRole("");
    setDesc("");
    setImage(null);

    fetchData();
  };

  // 🔥 DELETE FUNCTION (NEW)
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/leaders/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Manage Leadership
      </h1>

      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
          required
        />

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block border p-2 mb-4 w-full"
          required
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
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
          Save
        </button>

      </form>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-6">

        {leaders.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow text-center">

            <img
              src={item.img}
              alt=""
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />

            <h3 className="font-bold">{item.name}</h3>
            <p className="text-blue-600">{item.role}</p>
            <p className="text-gray-600 text-sm mt-2">
              {item.desc}
            </p>

            {/* 🔥 DELETE BUTTON (NEW) */}
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
}

export default Manageleader;