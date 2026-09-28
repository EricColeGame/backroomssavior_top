export type NavigationItem = {
  key: string;
  path: string;
  icon: unknown;
  isContentType: boolean;
};

// 导航配置清空（旧主题导航已移除，后续阶段按新主题重建）
export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
