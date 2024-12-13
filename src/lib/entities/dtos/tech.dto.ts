import type { Category } from "@/lib/entities/models/category.model";
import type { Image } from "@/lib/entities/models/image.model";
import type { Tech } from "@/lib/entities/models/tech.model";

export class TechDTO {
	private _name: string;
	private _experience: number;
	private _icon: Image;
	private _category: Category;

	constructor(name: string, experience: number, icon: Image, category: Category) {
		this._name = name;
		this._experience = experience;
		this._icon = icon;
		this._category = category;
	}

	static from(model: Tech): TechDTO {
		return new TechDTO(model.name, model.experience, model.icon, model.category);
	}

	public get name(): string {
		return this._name;
	}

	public get experience(): number {
		return this._experience;
	}

	public get icon(): Image {
		return this._icon;
	}

	public get category(): Category {
		return this._category;
	}
}
