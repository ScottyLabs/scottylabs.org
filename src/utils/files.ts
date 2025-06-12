/**
 * This is frankly very ugly, but import.meta.glob() can only accept string literals
 * https://stackoverflow.com/questions/72077023/import-meta-glob-can-only-accept-string-literals
 * @param dir ex. ./assets/carousel/*
 * @returns
 */
export function getAllImageLinksInAssetDirectory(
  dir:
    | "carousel-images"
    | "design-app-icons"
    | "code-app-icons"
    | "tartanhacks-photos"
): string[] {
  switch (dir) {
    case "carousel-images":
      return Object.values(
        import.meta.glob("../assets/irl/carousel/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>
      ).map((data) => data.default);
    case "design-app-icons":
      return Object.values(
        import.meta.glob("../assets/icons/apps/design/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>
      ).map((data) => data.default);
    case "code-app-icons":
      return Object.values(
        import.meta.glob("../assets/icons/apps/code/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>
      ).map((data) => data.default);
    case "tartanhacks-photos":
      return Object.values(
        import.meta.glob("../assets/irl/tartanhacks/*", {
          eager: true,
          query: "url",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as Record<string, any>
      ).map((data) => data.default);
  }
}
