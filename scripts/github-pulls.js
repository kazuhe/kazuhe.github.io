import fs from "fs";
import path from "path";
import fetch from "node-fetch";

/**
 * GitHub の Pull Request を取得する
 */
const fetchPulls = async (owner, repo, number) =>
  fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}`)
    .then((reponse) => reponse.json())
    .then((d) => ({
      title: d.title,
      description: d.body.substring(0, 150) + "...",
      url: d.html_url,
      createdAt: d.created_at,
      number: d.number,
      repo: d.base.repo.full_name,
    }))
    .catch((err) => {
      console.error(err);
      return undefined;
    });

(async () => {
  const pulls = await Promise.all([
    fetchPulls("zenn-dev", "zenn-editor", 151),
    fetchPulls("microcmsio", "microcms-js-sdk", 10),
  ]);

  await fs.promises.writeFile(
    path.resolve("json", "github-pulls.json"),
    JSON.stringify(pulls)
  );
})();
