import { db } from "@/lib/database";
import { QualificationDTO } from "@/lib/entities/dtos/qualification.dto";
import type { Qualification } from "@/lib/entities/models/qualification.model";
import type { IQualificationsRepository } from "@/lib/repositories/qualifications.repository.interface";

export class QualificationsRepository implements IQualificationsRepository {
	async getQualifications(): Promise<QualificationDTO[]> {
		return (await db.getList<Qualification>({ endpoint: "qualifications" })).contents.map((q) =>
			QualificationDTO.from(q),
		);
	}
}
