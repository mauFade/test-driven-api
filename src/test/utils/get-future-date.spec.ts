import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test("Increases one year test", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-08-10`).getFullYear()).toBe(2023);
});
