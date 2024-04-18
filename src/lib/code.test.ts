import { expect, test } from "@jest/globals";

import { add } from "./code";

test("1 + 1 is 2", () => {
  expect(add(1, 1)).toBe(2);
});

test("5 + 6 is 11", () => {
  expect(add(5, 6)).toBe(11);
});
