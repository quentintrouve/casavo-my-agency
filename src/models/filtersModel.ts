export interface IFilters {
  name?: string,
  budgetMin?: string,
  budgetMax?: string,
  areaMin?: string,
  areaMax?: string,
  rooms?: string
};

export type TSearchingEntity = "budget" | "area";