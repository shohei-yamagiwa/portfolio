import type { IPersonalInfoRepository } from "./application/personal-info.repository.interface";
import type { ISkillsRepository } from "./application/skills.repository.interface";
import type { IWorksRepository } from "./application/works.repository.interface";
import { PersonalInfoRepository } from "./infrastructure/personal-info.repository";
import { SkillsRepository } from "./infrastructure/skills.repository";
import { WorksRepository } from "./infrastructure/works.repository";

export const personalInfoRepository: IPersonalInfoRepository = new PersonalInfoRepository();
export const skillsRepository: ISkillsRepository = new SkillsRepository();
export const worksRepository: IWorksRepository = new WorksRepository();
