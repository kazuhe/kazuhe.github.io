import icon from "/icon.png";

/**
 * プロフィールを作成する
 */
export const createProfile = (): HTMLDivElement => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${icon}" class="w-12" alt="icon" />
    <div>
      <p class="text-xs">Ohara Kazuhiro (@kazuhe)</p>
    </div>
  `;
  return div;
};
