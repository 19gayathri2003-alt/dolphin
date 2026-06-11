import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";



import Login from "./components/Login";
import Admin from "./components/Admin";
import Managegallery from "./components/Managegallery";
import Manageleader from "./components/Manageleader";
import ManageNotes from "./components/ManageNotes";
import ManageMap from "./components/ManageMap";
import ManageContact from "./components/ManageContact";
import ManageEvents from "./components/ManageEvents";
import ManageAchievements from "./components/ManageAchievements";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
          <Route index element={<div></div>} /> 
          <Route path="managegallery" element={<Managegallery />} />
          <Route path="manageleader" element={<Manageleader />} />
           <Route path="notes" element={<ManageNotes />} />
           <Route path="map" element={<ManageMap />} />
           <Route path="managecontact" element={<ManageContact />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="manageachievements" element={<ManageAchievements />} />
          </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;