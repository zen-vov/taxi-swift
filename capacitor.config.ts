import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "taxi-swift",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://172.20.10.4:3000",
    cleartext: true,
  },
};

export default config;
