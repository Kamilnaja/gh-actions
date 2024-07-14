import cors from "cors";
import express from "express";

const app = express();
const port = 8080;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/test", () => {
  return "Test 1";
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
