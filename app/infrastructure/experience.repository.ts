import type { IExperienceRepository } from "~/application/experience-repository.interface";
import type { Experience } from "~/model/expeience";

export class ExperienceRepository implements IExperienceRepository {
  getExperiences(): Promise<Experience[]> {
    const hackathon: Experience = {
      id: "hackathon",
      type: "other",
      title: "技育際参加",
      organization: "Various",
      description: "2人チームを組んでWeb上で動作するAI音楽ゲームを開発しました。",
      startDate: new Date("2023-04-29"),
    };
    const seminar: Experience = {
      id: "seminar",
      type: "education",
      title: "ゼミプロジェクト",
      organization: "甲南大学 新田研究室",
      description:
        "友達とリアルタイムで活動を共有するSNSアプリを開発しました。\n内容としては以下の通りです。\n・Figmaを使用したデザイン作成\n・OpenAPIを使用したAPI設計\n・Spring Jerseyを使用したバックエンドの実装\n・Javaを使用したAndroidアプリの実装\n・PostmanによるAPIテスト",
      startDate: new Date("2025-04-07"),
      endDate: new Date("2025-10-31"),
    };
    const micomia: Experience = {
      id: "micomia",
      type: "work",
      title: "開発業務およびエンジニア教育・事業拡大業務",
      organization: "micomia株式会社",
      description:
        "当初は、パートタイムエンジニアとして新規アプリのDB設計やフロントエンド実装、REST APIからGraphQLへの移行などを担当しました。\nその後はCTOに就任し、以下の事業・組織課題に取り組みました。\n・技術部門のエンジニア教育\n・外部会社との合同モバイルアプリ開発\n・Firebase Messaging, Cloud Tasks, Cloud Scheduler, Cloud Run functionsを利用したプッシュ通知基盤の開発\n・Cloud Run functions, Stripe Connectを利用したマーケットプレイスサービスのバックエンド開発\n・グローバル展開（日・米・EU）のガチャガチャECサイトのPM、アーキテクチャ設計、管理画面のWebアプリケーション開発、バックエンド開発、テスト自動化\n・AI Agentを活用した仕様駆動開発",
      startDate: new Date("2024-11-01"),
      endDate: new Date("2026-01-31"),
    };
    const graduateResearchStudent: Experience = {
      id: "graduate-research-student",
      type: "education",
      title: "代数的アーキテクチャモデルDTRAMの研究",
      organization: "甲南大学大学院 自然科学研究科 知能情報専攻",
      description:
        "ソフトウェアの仕様及びアーキテクチャを同時に記述し、仕様を満たしながらアーキテクチャを変更することができる形式的モデルDTRAMの研究を行っています。\n現在は、複雑なデータ構造を扱いつつ、データと制御の流れをそれぞれ変更できるようにすることで、設計変更のバリエーションを増やす研究を行っています。",
      startDate: new Date("2026-04-01"),
      endDate: "present",
    };
    return Promise.resolve([hackathon, seminar, micomia, graduateResearchStudent]);
  }
}
