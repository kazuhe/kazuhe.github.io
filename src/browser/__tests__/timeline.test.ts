import { test, expect, describe } from "vitest";
import { sortTimeline, TimelineItem } from "../timeline";

describe("sortTimeline", () => {
  test("最新順に並び替えられていること", () => {
    const A01: TimelineItem = {
      date: "Tue Aug 08 2022 12:00:00 GMT+0900",
      title: "A01",
      link: "/",
    };
    const A02: TimelineItem = {
      date: "Tue Aug 09 2022 13:00:00 GMT+0900",
      title: "A02",
      link: "/",
    };
    const B01: TimelineItem = {
      date: "Tue Aug 06 2022 12:00:00 GMT+0900",
      title: "B01",
      link: "/",
    };
    const B02: TimelineItem = {
      date: "Tue Aug 09 2022 17:00:00 GMT+0900",
      title: "B02",
      link: "/",
    };

    expect(
      sortTimeline([
        [A01, A02],
        [B01, B02],
      ])
    ).toStrictEqual([B02, A02, A01, B01]);
  });
});
