import { Pull } from "@/domain/activity";

/**
 * GitHub の Pull Request を取得する
 */
export const fetchPulls = async (
  owner: string,
  repo: string,
  number: number
): Promise<Pull | undefined> =>
  fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}`)
    .then((reponse) => reponse.json())
    .then((data) => ({
      title: data.title,
      description: data.body.substring(0, 150) + "...",
      url: data.url,
      createdAt: data.created_at,
      number: data.number,
      repo: data.base.repo.full_name,
    }))
    .catch((err) => {
      console.error(err);
      return undefined;
    });
