const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* ================== MONGODB CONNECT ================== */

mongoose.connect("mongodb+srv://gayathri2003:gayu2003@cluster0.a5dcrhx.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("🔥 MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

/* ================== MODEL ================== */

const gallerySchema = new mongoose.Schema({
  category: String,
  label: String,
  img: String,
});

const Gallery = mongoose.model("Gallery", gallerySchema);

/* ================== LEADERSHIP MODEL ================== */

const leaderSchema = new mongoose.Schema({
  name: String,
  role: String,
  desc: String,
  img: String,
});

const Leader = mongoose.model("Leader", leaderSchema);

/* ================== MAP MODEL ================== */

const mapSchema = new mongoose.Schema({
  mapUrl: String,
});

const Map = mongoose.model("Map", mapSchema);
const Contact = require("./models/Contact");

app.post("/events", async (req, res) => {
  try {
    const { title, desc, category, date } = req.body;

    const newEvent = new Event({
      title,
      desc,
      category,
      date
    });

    await newEvent.save();

    res.json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving event" });
  }
});
/* ================== UPLOAD FOLDER ================== */

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ================== API ================== */

// 🔹 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server working ✅");
});

/* ---------- GALLERY ---------- */

app.get("/gallery", async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/gallery", upload.single("image"), async (req, res) => {
  try {
    const newItem = new Gallery({
      category: req.body.category,
      label: req.body.label,
      img: req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename,
    });

    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/gallery/:id", async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

/* ---------- LEADERS ---------- */

app.get("/leaders", async (req, res) => {
  try {
    const data = await Leader.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/leaders", upload.single("image"), async (req, res) => {
  try {
    const newLeader = new Leader({
      name: req.body.name,
      role: req.body.role,
      desc: req.body.desc,
      img: req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename,
    });

    await newLeader.save();
    res.json(newLeader);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/leaders/:id", async (req, res) => {
  try {
    await Leader.findByIdAndDelete(req.params.id);
    res.json({ message: "Leader deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

/* ================== NOTES MODEL ================== */

const notesSchema = new mongoose.Schema({
  title: String,
  desc: String,
  date: String,
});

const Note = mongoose.model("Note", notesSchema);

/* ================== NOTES API ================== */

app.get("/notes", async (req, res) => {
  const data = await Note.find();
  res.json(data);
});

app.post("/notes", async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    desc: req.body.desc,
    date: new Date().toLocaleDateString(),
  });

  await newNote.save();
  res.json(newNote);
});

app.delete("/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

/* ================== MAP API ================== */

// ✅ FIXED GET (safe)
app.get("/map", async (req, res) => {
  try {
    const data = await Map.findOne();
    res.json(data || {}); // 🔥 avoid null crash
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST map
app.post("/map", async (req, res) => {
  try {
    const existing = await Map.findOne();

    if (existing) {
      existing.mapUrl = req.body.mapUrl;
      await existing.save();
      res.json(existing);
    } else {
      const newMap = new Map({
        mapUrl: req.body.mapUrl,
      });
      await newMap.save();
      res.json(newMap);
    }
  } catch (err) {
    res.status(500).json({ error: "Map save failed" });
  }
});
// Contact
// POST (SAVE)
app.post("/contact", async (req, res) => {
  try {
    const newMsg = new Contact(req.body);
    await newMsg.save();
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

// GET (ADMIN VIEW)
app.get("/contact", async (req, res) => {
  const data = await Contact.find().sort({ _id: -1 });
  res.json(data);
});

// DELETE
app.delete("/contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// events 
// ================= EVENTS MODEL =================
const eventSchema = new mongoose.Schema({
  title: String,
  desc: String,
  category: String,
  date: String
});

const Event = mongoose.model("Event", eventSchema);

// ================= EVENTS API =================

// GET EVENTS
app.get("/events", async (req, res) => {
  try {
    const data = await Event.find().sort({ date: 1 });
    res.json(data);
  } catch (err) {
    console.log("GET ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST EVENT
app.post("/events", async (req, res) => {
  try {
    const { title, desc, category, date } = req.body;

    const newEvent = new Event({
      title,
      desc,
      category,
      date
    });

    await newEvent.save();
    res.json(newEvent);
  } catch (err) {
    console.log("POST ERROR:", err);
    res.status(500).json({ error: "Error saving event" });
  }
});

// DELETE EVENT
app.delete("/events/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.log("DELETE ERROR:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

// 
/* ================== ACHIEVEMENTS MODEL ================== */

const achievementSchema = new mongoose.Schema({
  category: String,
  year: String,
  title: String,
  desc: String,
  img: String,
});

const Achievement = mongoose.model("Achievement", achievementSchema);

/* ================== ACHIEVEMENTS API ================== */

// GET
app.get("/achievements", async (req, res) => {
  try {
    const data = await Achievement.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Fetch error" });
  }
});

// POST
app.post("/achievements", upload.single("image"), async (req, res) => {
  try {
    const newItem = new Achievement({
      category: req.body.category,
      year: req.body.year,
      title: req.body.title,
      desc: req.body.desc,
      img: req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename,
    });

    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Save failed" });
  }
});

// DELETE
app.delete("/achievements/:id", async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});
/* ================== SERVER ================== */


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});