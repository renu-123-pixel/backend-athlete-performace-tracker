import express from "express";
import cors from "cors";

import athleteRoutes from "./routes/athlete.routes.js";
import testRoutes from "./routes/test.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/athletes", athleteRoutes);
app.use("/tests", testRoutes);
app.use("/leaderboard", leaderboardRoutes);

app.get("/", (req, res) => {
  res.send("Peak Athlete Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

