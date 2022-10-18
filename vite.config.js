import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import getWhitelabelAliases from "./src/whitelabel.config.cjs";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  console.log(`configuring env for ${env.VITE_TEMPLATE}...`);
  const wla = getWhitelabelAliases(env.VITE_TEMPLATE);

  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    envDir: "./environments",
    plugins: [vue()],
    build: {
      outDir: `./dist/${env.VITE_TEMPLATE}`,
      sourcemap: true,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        ...wla,
      },
    },
  };
});
