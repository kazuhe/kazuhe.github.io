/**
 * タイムラインのアイテムを表す型
 */
type TimelineItem = {
  date: string;
  title: string;
  link: string;
};

/**
 * タイムラインを表す型
 */
type Timeline = TimelineItem[];

/**
 * タイムラインのアイテムを作成する
 */
const createTimelineItem = (timelineItem: TimelineItem): HTMLLIElement => {
  const li = document.createElement("li");
  li.innerHTML = `
    <p>${timelineItem.date}</p>
    <a href="${timelineItem.link}">${timelineItem.title}</a>
  `;
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
