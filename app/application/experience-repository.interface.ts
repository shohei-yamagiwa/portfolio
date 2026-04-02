import type { Experience } from "~/model/expeience";

export interface IExperienceRepository {
  getExperiences(): Promise<Experience[]>;
}
