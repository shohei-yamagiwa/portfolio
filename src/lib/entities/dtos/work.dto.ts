import type { Image } from "@/lib/entities/models/image.model";
import type { Tech } from "@/lib/entities/models/tech.model";
import type { Work } from "@/lib/entities/models/work.model";

export class WorkDTO {
	private _title: string;
	private _description?: string;
	private _previewImage: Image;
	private _link?: string;
	private _techs: Tech[];

	constructor(title: string, previewImage: Image, techs: Tech[], description?: string, link?: string) {
		this._title = title;
		this._description = description;
		this._previewImage = previewImage;
		this._link = link;
		this._techs = techs;
	}

	static from(model: Work): WorkDTO {
		return new WorkDTO(model.title, model.previewImage, model.techs, model.description, model.link);
	}

	public get title(): string {
		return this._title;
	}

	public get description(): string | undefined {
		return this._description;
	}

	public get previewImage(): Image {
		return this._previewImage;
	}

	public get link(): string | undefined {
		return this._link;
	}

	public get techs(): Tech[] {
		return this._techs;
	}
}
