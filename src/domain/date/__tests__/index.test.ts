import { describe, test, expect } from "vitest";
import { formatDate } from "../";

describe("formatDate", () => {
  test.each([
    ["2023-01-01", "2023/01/01"],
    ["2022-01-01T00:00:00+09:00", "2022/01/01"],
    ["InvalidDate", ""],
    ["", ""],
  ])("formatDate(%i) の時 %s を返すこと", (date, expected) => {
    expect(formatDate(date)).toBe(expected);
  });
});
