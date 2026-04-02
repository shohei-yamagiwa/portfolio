import type { Skill } from "~/model/skill";

export interface ISkillsRepository {
  getSkills(): Promise<Skill[]>;
}
