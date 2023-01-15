import { format, isValid } from "date-fns";

/**
 * 日付を yyyy/MM/dd にフォーマットする
 */
export const formatDate = (date: string): string =>
  isValid(new Date(date)) ? format(new Date(date), "yyyy/MM/dd") : "";
