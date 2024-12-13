import type { QualificationDTO } from "@/lib/entities/dtos/qualification.dto";

export interface IQualificationsRepository {
	getQualifications(): Promise<QualificationDTO[]>;
}
