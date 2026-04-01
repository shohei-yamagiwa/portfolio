import type { PersonalInfo } from "~/model/personal-info";

export interface IPersonalInfoRepository {
  getPersonalInfo(): Promise<PersonalInfo>;
}
