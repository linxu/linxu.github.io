import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Locale } from '../components/Locale';
import WithStoreAndTheme from "../../../common/util/testing";

test("Render Locale Component", async () => {
  const { container } = render(
    <WithStoreAndTheme>
      <Locale />
    </WithStoreAndTheme>
  );
  const style = "text-decoration: underline";
  const zhNode = await screen.getByTestId("lang-zh");
  await fireEvent.click(zhNode);
  expect(zhNode).toHaveStyle(style);
  const enNode = await screen.getByTestId("lang-en");
  await fireEvent.click(enNode);
  expect(enNode).toHaveStyle(style);
});
