import type { Image } from "./image.model";
import type { Tech } from "./tech.model";

export type Work = {
	id: string;
	title: string;
	description?: string;
	previewImage: Image;
	link?: string;
	techs: Tech[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};
