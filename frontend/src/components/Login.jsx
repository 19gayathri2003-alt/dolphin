import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToken, setShowToken] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const defaultEmail = "admin@123";
    const defaultPassword = "admin123";

    if (email === defaultEmail && password === defaultPassword) {
      
      // show token message
      setShowToken(true);

      // simulate token
      localStorage.setItem("token", "12345abcdef");

      // after 2 sec navigate
      setTimeout(() => {
        navigate("/admin");
      }, 2000);

    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-blue-900 text-white flex items-center justify-center rounded-full font-bold text-xl">
            D
          </div>
          <h2 className="text-2xl font-bold mt-3">Admin Login</h2>
          <p className="text-gray-500 text-sm">
            Dolphin Nursery & Primary School
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Enter Email"
             autoComplete="new-password"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
             autoComplete="new-password"
            className="w-full px-4 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-blue-900 text-white py-2 rounded-lg">
            Login
          </button>

        </form>

        <p className="text-xs text-center mt-4 text-gray-500">
          {/* Default: admin@dolphin.in / admin123 */}
        </p>
      </div>

      {/* 🔥 TOKEN MESSAGE */}
      {showToken && (
        <div className="fixed bottom-5 right-5 bg-blue-900 text-white px-5 py-3 rounded-lg shadow-lg">
          ✅ Login Successfully
          Welcome back, Admin💫
        </div>
      )}

    </div>
  );
}

export default Login;