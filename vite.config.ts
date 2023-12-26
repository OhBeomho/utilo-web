import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
    plugins: [solid()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles" as common;`,
                importer(...args) {
                    if (args[0] !== "@/styles") {
                        return;
                    }

                    return {
                        file: `${path.resolve(__dirname, "./src/assets/styles")}`
                    };
                }
            }
        }
    }
});
