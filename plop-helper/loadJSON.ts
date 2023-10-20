import fs from "fs";

const loadJSON = (path: string) =>
  JSON.parse(
    fs.readFileSync(new URL(path, import.meta.url), { encoding: "utf-8" }),
  );

export { loadJSON };
