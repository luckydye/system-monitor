import { State } from "@luckydye/app-state";

async function fetchUpdate() {
  const data = await fetch("/stats").then((res) => res.json());
  State.scope("system", {
    cpu: data.cpu.toFixed(1),
    battery: data.battery.toFixed(1),
    memory: data.memory.toFixed(1),
    temp: data.temp.toFixed(1),
  });
}

async function updateLoop() {
  fetchUpdate();
  setTimeout(() => updateLoop(), 1000);
}
updateLoop();
