import type { WorkDTO } from "@/lib/entities/dtos/work.dto";

export interface IWorksRepository {
	getWorks(): Promise<WorkDTO[]>;
}
