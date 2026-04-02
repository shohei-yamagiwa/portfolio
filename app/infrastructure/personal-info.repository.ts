import type { IPersonalInfoRepository } from "~/application/personal-info.repository.interface";
import type { PersonalInfo } from "~/model/personal-info";

export class PersonalInfoRepository implements IPersonalInfoRepository {
  async getPersonalInfo(): Promise<PersonalInfo> {
    return new Promise((resolve) =>
      resolve({
        name: "Shohei Yamagiwa",
        role: "Webエンジニア・モバイルエンジニア",
        bio: "フロントエンドを軸にしながら、Webアプリケーションの設計・実装からバックエンド、モバイルアプリ開発まで幅広く取り組んでいます。実務経験、研究活動を通して、ユーザー様に価値を届け続けるためのプロダクト開発を目指しています。",
        email: "shohei.yamagiwa@gmail.com",
        links: {
          github: "https://github.com/shohei-yamagiwa",
          zenn: "https://zenn.dev/shohei_yamagiwa",
          levtech: "",
          supporterz: "",
        },
      }),
    );
  }
}
