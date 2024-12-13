import { db } from "@/lib/database";
import { WorkDTO } from "@/lib/entities/dtos/work.dto";
import type { Work } from "@/lib/entities/models/work.model";
import type { IWorksRepository } from "@/lib/repositories/works.repository.interface";

export class WorksRepository implements IWorksRepository {
	async getWorks(): Promise<WorkDTO[]> {
		return (await db.getList<Work>({ endpoint: "works" })).contents.map((w) => WorkDTO.from(w));
	}
}
