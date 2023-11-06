import { paramCase } from "change-case";

interface AnyCaseName {
  name: string;
}

export const appendImports = (
  fileContents: string,
  { name: anyCaseName }: AnyCaseName,
) => {
  const lines = fileContents.split("\n").filter(Boolean);
  const componentImport = `import "@/components/${paramCase(
    anyCaseName,
  )}/component";`;
  lines.push(componentImport);
  lines.sort();
  return [...new Set(lines)].join("\n");
};
