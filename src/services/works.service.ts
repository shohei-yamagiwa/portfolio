import type { WorkDTO } from "@/lib/entities/dtos/work.dto";
import type { IWorksRepository } from "@/lib/repositories/works.repository.interface";

export class WorksService {
	private _worksRepository: IWorksRepository;

	constructor(worksRepository: IWorksRepository) {
		this._worksRepository = worksRepository;
	}

	async getWorks(): Promise<WorkDTO[]> {
		// * Check authentication here
		return await this._worksRepository.getWorks();
	}
}
