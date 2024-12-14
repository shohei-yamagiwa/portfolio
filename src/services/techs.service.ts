import type { TechDTO } from "@/lib/entities/dtos/tech.dto";
import type { Category } from "@/lib/entities/models/category.model";
import type { ITechsRepository } from "@/lib/repositories/techs.repository.interface";

export class TechsService {
	private _techsRepository: ITechsRepository;

	constructor(techsRepository: ITechsRepository) {
		this._techsRepository = techsRepository;
	}

	async getTechs(): Promise<TechDTO[]> {
		// * Check authentication here
		return await this._techsRepository.getTechs();
	}

	async getTechsByCategory(category: Category): Promise<TechDTO[]> {
		// * Check authentication here
		return await this._techsRepository.getTechsByCategory(category);
	}
}
