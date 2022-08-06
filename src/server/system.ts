import os from "systeminformation";

export default class SystemInfo {
  public static getBatteryLevel(): Promise<number> {
    return os.battery().then((data) => data.percent);
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
    return os.cpuTemperature().then((data) => data.main);
  }
}
