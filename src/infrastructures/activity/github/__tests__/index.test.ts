import path from "path";
import { test, expect, describe } from "vitest";
import { fetchPulls } from "..";

describe("fetchPulls", () => {
  test("正しくコンバートされていること", async () => {
    expect(
      await fetchPulls(
        path.resolve(
          "src",
          "infrastructures",
          "activity",
          "github",
          "__tests__",
          "mock.json"
        )
      )
    ).toStrictEqual([
      {
        title: "GitHub Pulls API test",
        description:
          "012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789...",
        url: "https://github.com/foo/bar/pull/1",
        createdAt: "created_at",
        number: 1,
        repo: "foo/bar",
      },
      {
        title: "GitHub Pulls API test",
        description:
          "012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789...",
        url: "https://github.com/hoge/fuga/pull/2",
        createdAt: "created_at",
        number: 2,
        repo: "hoge/fuga",
      },
    ]);
  });

  test("存在しないパスを渡されると undefined を返すこと", async () => {
    expect(await fetchPulls("foo.json")).toBe(undefined);
  });
});
