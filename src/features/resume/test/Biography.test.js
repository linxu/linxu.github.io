import React from "react";
import { render } from "@testing-library/react";
import { Biography } from "../components/Biography";
import WithStoreAndTheme from "../../../common/util/testing";

const data = {
  bio: {
    name: "Test Name",
    position: "",
    introduce: "",
  },
};

test("Render Biography Component", async () => {
  const tree = render(
    <WithStoreAndTheme>
      <Biography data={data} />
    </WithStoreAndTheme>,
  );
  expect(tree.container).toHaveTextContent(data.bio.name);
});
