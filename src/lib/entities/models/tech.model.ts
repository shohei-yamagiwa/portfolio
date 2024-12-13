import type { Category } from "./category.model";
import type { Image } from "./image.model";

export type Tech = {
	id: string;
	name: string;
	experience: number;
	icon: Image;
	category: Category;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};
