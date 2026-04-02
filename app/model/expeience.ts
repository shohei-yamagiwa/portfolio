export type Experience = {
  id: string;
  type: "work" | "education" | "other";
  title: string;
  organization: string;
  description: string;
  startDate: Date;
  endDate?: Date | "present";
};
