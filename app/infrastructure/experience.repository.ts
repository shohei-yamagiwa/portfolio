import type { IExperienceRepository } from "~/application/experience-repository.interface";
import type { Experience } from "~/model/expeience";

// TODO: 実際の内容に修正する
export class ExperienceRepository implements IExperienceRepository {
  getExperiences(): Promise<Experience[]> {
    const hackathon: Experience = {
      id: "hackathon",
      type: "other",
      title: "Hackathon Participant",
      organization: "Various",
      description:
        "Participated in multiple hackathons, developing innovative solutions and collaborating with diverse teams.",
      startDate: new Date("2023-04-29"),
    };
    const seminar: Experience = {
      id: "seminar",
      type: "education",
      title: "Seminar Speaker",
      organization: "Tech Conferences",
      description: "Delivered talks on software development and technology trends at various tech conferences.",
      startDate: new Date("2025-04-07"),
      endDate: new Date("2025-10-31"),
    };
    const micomia: Experience = {
      id: "micomia",
      type: "work",
      title: "Software Engineer Intern",
      organization: "Micomia Inc.",
      description:
        "Contributed to the development of a web application using React and Node.js, improving user experience and performance.",
      startDate: new Date("2024-11-01"),
      endDate: new Date("2026-01-31"),
    };
    const graduateResearchStudent: Experience = {
      id: "graduate-research-student",
      type: "education",
      title: "Graduate Research Student",
      organization: "Konan University",
      description:
        "Conducted research on machine learning algorithms, resulting in a published paper and a presentation at an international conference.",
      startDate: new Date("2026-04-01"),
      endDate: "present",
    };
    return Promise.resolve([hackathon, seminar, micomia, graduateResearchStudent]);
  }
}
