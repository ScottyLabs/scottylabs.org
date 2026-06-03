/**
 * This is frankly very ugly, but import.meta.glob() can only accept string literals
 * https://stackoverflow.com/questions/72077023/import-meta-glob-can-only-accept-string-literals
 * @param dir
 * @returns
 */
export function getAllImageLinksInAssetDirectory(
  dir:
    | "carousel-images"
    | "design-app-icons"
    | "code-app-icons"
    | "tartanhacks-photos"
    | "cmu-courses"
    | "cmu-eats"
    | "cmu-maps"
    | "lost-and-found",
): string[] {
  switch (dir) {
    case "carousel-images":
      return Object.values(
        import.meta.glob("../assets/irl/carousel/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "design-app-icons":
      return Object.values(
        import.meta.glob("../assets/icons/apps/design/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "code-app-icons":
      return Object.values(
        import.meta.glob("../assets/icons/apps/code/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "tartanhacks-photos":
      return Object.values(
        import.meta.glob("../assets/irl/tartanhacks/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "cmu-courses":
      return Object.values(
        import.meta.glob("../assets/projects-page/cmu-courses/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "cmu-eats":
      return Object.values(
        import.meta.glob("../assets/projects-page/cmu-eats/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "cmu-maps":
      return Object.values(
        import.meta.glob("../assets/projects-page/cmu-maps/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
    case "lost-and-found":
      return Object.values(
        import.meta.glob("../assets/projects-page/lost-and-found/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>,
      ).map((data) => data.default);
  }
}
