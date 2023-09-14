import { global as globalThis } from "@storybook/global";

import { ButtonTag } from "./Button/Button";

globalThis.Components = {
  Button: ButtonTag,
};

globalThis.storybookRenderer = "web-components";
