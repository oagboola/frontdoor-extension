import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (req, res) => {
  res.json({ msg: "hello there" });
});

app.listen(PORT, () => {
  console.log("server is listening on port: ", PORT);
});
