import type { IPersonalInfoRepository } from "./application/personal-info.repository.interface";
import type { ISkillsRepository } from "./application/skills.repository.interface";
import { PersonalInfoRepository } from "./infrastructure/personal-info.repository";
import { SkillsRepository } from "./infrastructure/skills.repository";

export const personalInfoRepository: IPersonalInfoRepository = new PersonalInfoRepository();
export const skillsRepository: ISkillsRepository = new SkillsRepository();
