import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'app.tdc.simpletask',
  appName: 'Simple Task',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config
