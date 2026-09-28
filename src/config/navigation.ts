export type NavigationItem = {
  /** 翻译键（en.json 的 nav 命名空间） */
  key: string;
  /** URL 路径，必须以 / 开头 */
  path: `/${string}`;
  isContentType: boolean;
};

// 分类 slug 来自关键词.json 的 categories，与 content/<locale>/ 子目录一一对应
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "levels", path: "/levels", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "games", path: "/games", isContentType: true },
  { key: "movie", path: "/movie", isContentType: true },
  { key: "history", path: "/history", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
