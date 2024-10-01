import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    // proxy means redirecting your frontend to a different server
    // in this case frontend is redirected to a target of port 5000
    // on which our backend is running so both run together
    // It will redirect all requests starting from "/api" to this 5000 port
    proxy:{
      "/api":{
        target: "http://localhost:5000"
      }
    }
  }
})
// we are not using cors instead we do this