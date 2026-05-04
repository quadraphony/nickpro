export type ServiceImageCategory =
  | "Painting"
  | "Roofing"
  | "Plumbing"
  | "Tiling"
  | "Flooring"
  | "Cleaning"
  | "Carpentry"
  | "General Maintenance";

export type ServiceImage = {
  src: string;
  title: string;
  category: ServiceImageCategory;
  alt: string;
  fileName: string;
};

const serviceImageModules = import.meta.glob<string>(
  "../assets/services/*.{jpeg,jpg,png,webp}",
  { eager: true, import: "default" }
);

const categoryByPrefix: Record<string, ServiceImageCategory> = {
  carpentry: "Carpentry",
  cleaning: "Cleaning",
  concrete_finishing: "General Maintenance",
  concrete_work: "General Maintenance",
  concreting: "General Maintenance",
  construction: "General Maintenance",
  door_installation: "General Maintenance",
  door_repair: "General Maintenance",
  flooring: "Flooring",
  interior_design: "General Maintenance",
  landscaping: "General Maintenance",
  painting: "Painting",
  plumbing: "Plumbing",
  roofing: "Roofing",
  taxi: "General Maintenance",
  tiling: "Tiling",
};

const titleByPrefix: Record<string, string> = {
  carpentry: "Carpentry Work",
  cleaning: "Cleaning Service",
  concrete_finishing: "Concrete Finishing",
  concrete_work: "Concrete Work",
  concreting: "Concreting Work",
  construction: "Construction Work",
  door_installation: "Door Installation",
  door_repair: "Door Repair",
  flooring: "Flooring Installation",
  interior_design: "Interior Finishing",
  landscaping: "Landscaping Work",
  painting: "Professional Painting",
  plumbing: "Plumbing Repair",
  roofing: "Roofing Work",
  taxi: "General Maintenance Work",
  tiling: "Tiling Work",
};

const getImageMeta = (fileName: string) => {
  const name = fileName.replace(/\.[^.]+$/, "");
  const prefix = name.replace(/\d+$/, "");
  const sequence = name.match(/\d+$/)?.[0];
  const normalizedPrefix = prefix.replace(/_$/, "");
  const category = categoryByPrefix[normalizedPrefix] ?? "General Maintenance";
  const baseTitle = titleByPrefix[normalizedPrefix] ?? "Maintenance Work";

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
      alt: `Edson Maintenance ${title.toLowerCase()} project in Cape Town`,
    };
  });

export const serviceImageFilters = [
  "All",
  ...Array.from(new Set(serviceImages.map((image) => image.category))),
] as const;
