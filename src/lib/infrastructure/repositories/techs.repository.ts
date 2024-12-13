import { db } from "@/lib/database";
import { TechDTO } from "@/lib/entities/dtos/tech.dto";
import type { Category } from "@/lib/entities/models/category.model";
import type { Tech } from "@/lib/entities/models/tech.model";
import type { ITechsRepository } from "@/lib/repositories/techs.repository.interface";

export class TechsRepository implements ITechsRepository {
	async getTechs(): Promise<TechDTO[]> {
		return (await db.getList<Tech>({ endpoint: "techs" })).contents.map((t) => TechDTO.from(t));
	}

	async getTechsByCategory(category: Category): Promise<TechDTO[]> {
		return (await db.getList<Tech>({ endpoint: "techs" })).contents
			.filter((c) => c.category === category)
			.map((t) => TechDTO.from(t));
	}
}
