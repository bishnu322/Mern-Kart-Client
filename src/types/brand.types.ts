import type { IImage, IResponse } from "./global.types";

export interface IBrand extends IResponse {
  brand_name: string;
  slug?: string;
  description: string;
  logo: IImage;
  isActive: boolean;
  averageRating: number;
  ratingCount: number;
}
