import SystemInfo from "./system";

const express = require("express");
const app = express();
const port = 3000;

let systemData = {};

const update = async () => {
  systemData = {
    battery: await SystemInfo.getBatteryLevel(),
    cpu: await SystemInfo.getCPUUsage(),
    memory: await SystemInfo.getFreeMemory(),
  };
};

const loop = async () => {
  await update();
  setTimeout(() => loop(), 500);
};
loop();

app.use("/", express.static("dist"));

app.get("/stats", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(systemData));
});

app.listen(port, () => {
  console.log(`System Monitor listening on port ${port}`);
});
