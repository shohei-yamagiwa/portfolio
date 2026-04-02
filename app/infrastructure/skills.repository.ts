import type { ISkillsRepository } from "~/application/skills.repository.interface";
import type { Skill } from "~/model/skill";

export class SkillsRepository implements ISkillsRepository {
  getSkills(): Promise<Skill[]> {
    const frontend: Skill = {
      category: "Frontend",
      items: ["TypeScript", "React", "Tailwind CSS"],
    };
    const backend: Skill = {
      category: "Backend",
      items: ["Node.js", "Hono", "Supabase", "PostgreSQL", "Firestore"],
    };
    const mobile: Skill = {
      category: "Mobile",
      items: ["Kotlin", "Jetpack Compose"],
    };
    const toolsAndOthers: Skill = {
      category: "ToolsAndOthers",
      items: ["Git", "Docker", "GitHub", "Google Cloud"],
    };

    return Promise.resolve([frontend, backend, mobile, toolsAndOthers]);
  }
}
