#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const lib = path.join(
  path.dirname(fs.realpathSync(__filename)),
  "./src/server/main.ts"
);

cp.spawn("ts-node", [lib], { stdio: "inherit" });
