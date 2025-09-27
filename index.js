import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("PDA Session Quiz App Backend is running!");
});

// Example endpoint for room creation
app.post("/api/create-room", (req, res) => {
  const { secretKey } = req.body;
  if (secretKey === "admin123") {
    const roomKey = Math.random().toString(36).substring(2, 8).toUpperCase();
    res.json({ roomKey });
  } else {
    res.status(401).json({ error: "Invalid secret key" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
