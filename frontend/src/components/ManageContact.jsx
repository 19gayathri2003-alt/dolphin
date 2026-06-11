import { useEffect, useState } from "react";

function ManageContact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contact")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const deleteMsg = async (id) => {
    await fetch(`http://localhost:5000/contact/${id}`, {
      method: "DELETE"
    });

    setData(prev => prev.filter(item => item._id !== id));
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Manage Contacts
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="min-w-full text-sm text-left">

          {/* TABLE HEADER */}
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item._id}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {item.email}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {item.phone}
                </td>

                <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                  {item.message}
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => deleteMsg(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {/* EMPTY STATE */}
        {data.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No messages found
          </p>
        )}

      </div>

    </div>
  );
}

export default ManageContact;