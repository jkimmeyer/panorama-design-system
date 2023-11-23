import { paramCase } from "change-case";

interface Props {
  name: string;
  designSystem: string;
}

export const appendImports = (
  fileContents: string,
  { name: anyCaseName, designSystem }: Props,
) => {
  const lines = fileContents.split("\n").filter(Boolean);
  const componentImport = `import "./components/${designSystem}/${paramCase(
    anyCaseName,
  )}/component";`;
  lines.push(componentImport);
  lines.sort();
  return [...new Set(lines)].join("\n");
};
