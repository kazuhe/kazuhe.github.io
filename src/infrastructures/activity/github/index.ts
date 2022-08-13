import fs from "fs";
import { Pull } from "@/domain/activity";

/**
 * GitHub の Pull Request を取得する
 */
export const fetchPulls = async (path: string): Promise<Pull[] | undefined> =>
  fs.promises
    .readFile(path, "utf-8")
    .then(JSON.parse)
    .then((data) =>
      data.map((data) => ({
        title: data.title,
        description: data.body.substring(0, 150) + "...",
        url: data.html_url,
        createdAt: data.created_at,
        number: data.number,
        repo: data.base.repo.full_name,
      }))
    )
    .catch((err) => {
      console.error(err);
      return undefined;
    });
