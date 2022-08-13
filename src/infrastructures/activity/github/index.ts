import fs from "fs";
import path from "path";
import { Pull } from "@/domain/activity";

/**
 * GitHub の Pull Request を取得する
 */
export const fetchPulls = async (): Promise<Pull[] | undefined> =>
  fs.promises
    .readFile(path.resolve("json", "github-pulls.json"), "utf-8")
    .then((reponse) => JSON.parse(reponse))
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
