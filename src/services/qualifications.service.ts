import type { QualificationDTO } from "@/lib/entities/dtos/qualification.dto";
import type { IQualificationsRepository } from "@/lib/repositories/qualifications.repository.interface";

export class QualificationsService {
	private _qualificationsRepository: IQualificationsRepository;

	constructor(qualificationsRepository: IQualificationsRepository) {
		this._qualificationsRepository = qualificationsRepository;
	}

	async getQualifications(): Promise<QualificationDTO[]> {
		// * Check authentication here
		return await this._qualificationsRepository.getQualifications();
	}
}
