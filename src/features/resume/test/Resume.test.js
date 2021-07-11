import React from "react";
import { render } from "@testing-library/react";
import { Resume } from "../components/Resume";
import WithStoreAndTheme from "../../../common/util/testing";

test("Render Resume Component", async () => {
  const tree = render(
    <WithStoreAndTheme>
      <Resume />
    </WithStoreAndTheme>
  );
  expect(tree.container).not.toBeEmpty();
});
