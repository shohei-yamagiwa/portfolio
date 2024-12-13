import type { Qualification } from "@/lib/entities/models/qualification.model";

export class QualificationDTO {
	private _name: string;
	private _status: string;

	constructor(name: string, status: string) {
		this._name = name;
		this._status = status;
	}

	static from(model: Qualification): QualificationDTO {
		return new QualificationDTO(model.name, model.status);
	}

	public get name(): string {
		return this._name;
	}

	public get status(): string {
		return this._status;
	}
}
