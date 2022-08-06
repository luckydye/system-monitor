#!/usr/bin/env node
const cp = require("child_process");
cp.spawn("ts-node", ["./src/server/main.ts"], { stdio: "inherit" });
