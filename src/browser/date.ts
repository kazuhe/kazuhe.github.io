import { format, isValid } from "date-fns";

/**
 * 日付を文字列にフォーマットする
 */
type DateFormat = (date?: string) => string;

/**
 * 日付を yyyy/MM/dd にフォーマットする
 */
export const dateFormat: DateFormat = (date) => {
  if (date === undefined) return "";
  return isValid(new Date(date)) ? format(new Date(date), "yyyy/MM/dd") : "";
};

/**
 * 日付を yyyy/MM/dd HH:mm:ss にフォーマットする
 */
export const datetimeFormat: DateFormat = (date) => {
  if (date === undefined) return "";
  return isValid(new Date(date))
    ? format(new Date(date), "yyyy/MM/dd HH:mm:ss")
    : "";
};
