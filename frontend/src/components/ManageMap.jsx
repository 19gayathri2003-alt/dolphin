import React, { useState, useEffect } from "react";

function ManageMap() {
  const [mapUrl, setMapUrl] = useState("");

  // fetch existing map
  useEffect(() => {
    fetch("http://localhost:5000/map")
      .then(res => res.json())
      .then(data => {
        if (data && data.mapUrl) {
          setMapUrl(data.mapUrl);
        }
      })
      .catch(err => console.log("Fetch error:", err));
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/map", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mapUrl }),
      });
    } catch (err) {
      console.log("Save error:", err);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Map Settings
      </h1>

      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >

        <input
          type="text"
          placeholder="Paste Google Maps Embed URL"
          value={mapUrl}
          onChange={(e) => setMapUrl(e.target.value)}
          className="block border p-2 mb-4 w-full"
          required
        />

        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Save Changes
        </button>

      </form>

      {/* PREVIEW */}
      {mapUrl ? (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Preview</h2>

          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          ></iframe>

        </div>
      ) : (
        <p className="text-gray-500">No map added yet</p>
      )}

    </div>
  );
}

export default ManageMap;