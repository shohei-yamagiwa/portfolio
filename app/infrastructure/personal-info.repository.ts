import type { IPersonalInfoRepository } from "~/application/personal-info.repository.interface";
import type { PersonalInfo } from "~/model/personal-info";

export class PersonalInfoRepository implements IPersonalInfoRepository {
  async getPersonalInfo(): Promise<PersonalInfo> {
    return new Promise((resolve) =>
      resolve({
        name: "Shohei Yamagiwa",
        role: "Software Engineer",
        bio: "I am a software engineer specializing in frontend development. I have experience in building web applications using React, TypeScript, and other modern technologies. I am passionate about creating user-friendly and visually appealing interfaces.",
        email: "",
        links: {
          github: "",
          zenn: "",
          levtech: "",
          supporterz: "",
        },
      }),
    );
  }
}
