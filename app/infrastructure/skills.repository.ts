import type { ISkillsRepository } from "~/application/skills.repository.interface";
import type { Skill } from "~/model/skill";

export class SkillsRepository implements ISkillsRepository {
  getSkills(): Promise<Skill[]> {
    const frontend: Skill = {
      category: "Frontend",
      items: ["React", "Vue", "Angular", "Svelte"],
    };
    const backend: Skill = {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "Spring Boot"],
    };
    const mobile: Skill = {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
    };
    const toolsAndOthers: Skill = {
      category: "ToolsAndOthers",
      items: ["Git", "Docker", "Kubernetes", "AWS"],
    };

    return Promise.resolve([frontend, backend, mobile, toolsAndOthers]);
  }
}
