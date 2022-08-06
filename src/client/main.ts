import { State } from "@luckydye/app-state";

async function fetchUpdate() {
  const data = await fetch("http://localhost:3000/stats").then((res) =>
    res.json()
  );
  State.scope("system", {
    cpu: (data.cpu * 100).toFixed(1),
    battery: (data.battery * 100).toFixed(1),
    memory: (100 - data.memory * 100).toFixed(1),
  });
}

async function updateLoop() {
  fetchUpdate();
  setTimeout(() => updateLoop(), 1000);
}
updateLoop();
