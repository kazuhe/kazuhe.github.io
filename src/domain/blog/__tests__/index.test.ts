import { test, expect, describe } from "vitest";
import { sortBlogs, Blog } from "..";

describe("sortBlogs", () => {
  test("最新順に並び替えられていること", () => {
    const defaultValue = {
      description: "description",
      path: "path",
      icon: "🐱",
      type: "own",
    };

    const A01 = {
      ...defaultValue,
      title: "A01",
      createdAt: "Tue Aug 08 2022 12:00:00 GMT+0900",
    } as Blog;
    const A02 = {
      ...defaultValue,
      title: "A02",
      createdAt: "Tue Aug 09 2022 13:00:00 GMT+0900",
    } as Blog;
    const B01 = {
      ...defaultValue,
      title: "B01",
      createdAt: "Tue Aug 06 2022 12:00:00 GMT+0900",
    } as Blog;
    const B02 = {
      ...defaultValue,
      title: "B02",
      createdAt: "Tue Aug 09 2022 17:00:00 GMT+0900",
    } as Blog;

    expect(
      sortBlogs([
        [A01, A02],
        [B01, B02],
      ])
    ).toStrictEqual([B02, A02, A01, B01]);
  });
});
