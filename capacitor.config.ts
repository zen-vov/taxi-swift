import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "taxi-swift",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.3:3001",
    cleartext: true,
  },
};

export default config;
