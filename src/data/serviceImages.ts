export type ServiceImageCategory =
  | "Painting"
  | "Tiling"
  | "Flooring";

export type ServiceImage = {
  src: string;
  title: string;
  category: ServiceImageCategory;
  alt: string;
  fileName: string;
};

const serviceImageModules = import.meta.glob<string>(
  "../assets/services/{painting,flooring,tiling}*.{jpeg,jpg,png,webp}",
  { eager: true, import: "default" }
);

const categoryByPrefix: Record<string, ServiceImageCategory> = {
  flooring: "Flooring",
  painting: "Painting",
  tiling: "Tiling",
};

const titleByPrefix: Record<string, string> = {
  flooring: "Flooring Installation",
  painting: "Professional Painting",
  tiling: "Tiling Work",
};

const getImageMeta = (fileName: string) => {
  const name = fileName.replace(/\.[^.]+$/, "");
  const prefix = name.replace(/\d+$/, "");
  const sequence = name.match(/\d+$/)?.[0];
  const normalizedPrefix = prefix.replace(/_$/, "");
  const category = categoryByPrefix[normalizedPrefix] ?? "Painting";
  const baseTitle = titleByPrefix[normalizedPrefix] ?? "Service Work";

  return {
    category,
    title: sequence ? `${baseTitle} ${sequence}` : baseTitle,
  };
};

const naturalSort = ([pathA]: [string, string], [pathB]: [string, string]) =>
  pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" });

export const serviceImages: ServiceImage[] = Object.entries(serviceImageModules)
  .sort(naturalSort)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? path;
    const { category, title } = getImageMeta(fileName);

    return {
      src,
      title,
      category,
      fileName,
      alt: `NickPro ${title.toLowerCase()} project in Cape Town`,
    };
  });

export const serviceImageFilters = [
  "All",
  ...Array.from(new Set(serviceImages.map((image) => image.category))),
] as const;
