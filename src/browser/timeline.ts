import { dateFormat } from "./date";

/**
 * タイムラインのアイテム
 */
export type TimelineItem = {
  date: string;
  title: string;
  link: string;
  tag?: string;
};

/**
 * タイムライン
 */
type Timeline = TimelineItem[];

/**
 * タイムラインのタグを作成する
 */
const createTag = (text: string): HTMLSpanElement => {
  const span = document.createElement("span");
  span.classList.add(
    "bg-zinc-700",
    "text-zinc-300",
    "text-xs",
    "px-2",
    "py-0.5",
    "ml-2",
    "rounded-md"
  );
  span.textContent = text;
  return span;
};

/**
 * タイムラインのアイテムを作成する
 */
const createTimelineItem = (timelineItem: TimelineItem): HTMLLIElement => {
  const li = document.createElement("li");
  li.classList.add("relative", "pl-6", "pb-4");

  const p = document.createElement("p");
  p.classList.add("text-xs", "text-zinc-400");
  p.textContent = dateFormat(timelineItem.date);
  if (timelineItem.tag) {
    p.appendChild(createTag(timelineItem.tag));
  }
  li.appendChild(p);

  const a = document.createElement("a");
  a.classList.add(
    "mt-2",
    "text-sm",
    "inline-block",
    "hover:text-zinc-400",
    "hover:border-b",
    "hover:border-zinc-400"
  );
  a.href = timelineItem.link;
  a.textContent = timelineItem.title;
  a.setAttribute("target", "_blank");

  const span = document.createElement("span");
  span.classList.add("icon-[mdi--open-in-new]", "text-zinc-400", "ml-1");
  a.appendChild(span);

  li.appendChild(a);

  return li;
};

/**
 * タイムラインを作成する
 */
export const createTimeline = (timeline: Timeline): HTMLUListElement => {
  const ul = document.createElement("ul");
  ul.classList.add("timeline");
  timeline.forEach((timelineItem) => {
    const li = createTimelineItem(timelineItem);
    ul.appendChild(li);
  });
  return ul;
};

/**
 * タイムラインを最新順に並び替える
 */
type SortTimeline = ([a, b]: [
  TimelineItem[],
  TimelineItem[]
]) => TimelineItem[];

export const sortTimeline: SortTimeline = ([a, b]) =>
  a.concat(b).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

/**
 * json ファイルを引数として受け取って、タイムライン の配列に変換する
 */
export const convertJsonToTimeline = (
  json: {
    title: string;
    description: string;
    link: string;
    createdAt: string;
    type: string;
  }[]
): Timeline =>
  json.map((item) => ({
    date: item.createdAt,
    title: item.title,
    link: item.link,
    tag: item.type,
  }));
