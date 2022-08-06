import os from "systeminformation";

let tempWarning = false;

function warnTemp() {
  if (!tempWarning) {
    console.warn("Reading CPU temperature might require elevated privileges");
    tempWarning = true;
  }
}

export default class SystemInfo {
  public static getBatteryLevel(): Promise<number> {
    return os.battery().then((data) => {
      return data.hasBattery ? null : data.percent;
    });
  }

  public static getCPUUsage(): Promise<number> {
    return os.currentLoad().then((data) => data.currentLoad);
  }

  public static getMemoryUsage() {
    return os.mem().then((data) => {
      return (data.used / data.total) * 100;
    });
  }

  public static getTemperature() {
    return os.cpuTemperature().then((data) => {
      if (data.main === null) {
        warnTemp();
      }
      return data.main;
    });
  }
}
