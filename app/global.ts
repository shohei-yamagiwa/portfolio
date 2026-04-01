import type { IPersonalInfoRepository } from "./application/personal-info.repository.interface";
import { PersonalInfoRepository } from "./infrastructure/personal-info.repository";

export const personalInfoRepository: IPersonalInfoRepository = new PersonalInfoRepository();
