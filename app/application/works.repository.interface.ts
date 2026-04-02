import type { Work } from "~/model/work";

export interface IWorksRepository {
  getWorks(): Promise<Work[]>;
}
