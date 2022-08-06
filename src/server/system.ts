import { default as sys } from "node:os";
import battery from "battery-level";
import os from "os-utils";

export default class SystemInfo {
  public static getBatteryLevel(): Promise<number> {
    return battery();
  }

  public static getCPUUsage(): Promise<number> {
    return new Promise((resolve) => {
      os.cpuUsage((usage) => {
        resolve(usage);
      });
    });
  }

  public static getFreeMemory() {
    return os.freememPercentage();
  }
}
