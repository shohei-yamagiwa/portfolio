import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["dist/**", "coverage/**", "build/**"],
  options: {
    typeAware: true,
  },
});
