import { global as globalThis } from "@storybook/global";

import { ButtonTag } from "./Button/Button";
import { DataTableTag } from "./DataTable/DataTable";

globalThis.Components = {
  Button: ButtonTag,
  DataTable: DataTableTag,
};

globalThis.storybookRenderer = "web-components";
