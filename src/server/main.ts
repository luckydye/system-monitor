import SystemInfo from "./system";

const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

let systemData = {};

const update = async () => {
  systemData = {
    battery: await SystemInfo.getBatteryLevel(),
    cpu: await SystemInfo.getCPUUsage(),
    temp: await SystemInfo.getTemperature(),
    memory: await SystemInfo.getMemoryUsage(),
  };
  console.log(systemData);
};

const loop = async () => {
  await update();
  setTimeout(() => loop(), 500);
};
loop();

const dist = path.join(path.dirname(fs.realpathSync(__filename)), "../../dist");
app.use("/", express.static(dist));

app.get("/stats", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(systemData));
});

app.listen(port, () => {
  console.log(`System Monitor listening on port ${port}`);
});
