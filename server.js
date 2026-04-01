const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage (no database)
let contacts = [];

// POST API
app.post("/contact", (req, res) => {
  const data = req.body;
  contacts.push(data);

  console.log("📩 New Message:", data);

  res.json({ message: "Message saved (no DB)" });
});

// GET API (to check data)
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});