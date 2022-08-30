// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.mjs",
        format: "es",
        sourcemap: false,
      },
      {
        file: "lib/index.umd.js",
        name: "Zod",
        format: "umd",
        sourcemap: false,
      },
    ],
    plugins: [
      ["polyfill-es-shims", {
        "method": "usage-global"
      }],
      typescript({
        tsconfig: "tsconfig.esm.json",
        sourceMap: false,
      }),
    ],
  },
];
