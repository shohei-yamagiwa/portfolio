import type { TechDTO } from "@/lib/entities/dtos/tech.dto";
import type { Category } from "@/lib/entities/models/category.model";

export interface ITechsRepository {
	getTechs(): Promise<TechDTO[]>;
	getTechsByCategory(category: Category): Promise<TechDTO[]>;
}
