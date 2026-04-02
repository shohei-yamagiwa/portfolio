import type { IWorksRepository } from "~/application/works.repository.interface";
import type { Work } from "~/model/work";

export class WorksRepository implements IWorksRepository {
  getWorks(): Promise<Work[]> {
    const constell: Work = {
      id: "constell",
      title: "Constell",
      description:
        "Constellは、散らばった知識（Web記事、メモ、アイデアなど）をAIが分析し、意味的な関連性に基づいて自動的に繋ぎ合わせる「第2の脳」を目指すツールです。単なる情報の蓄積ではなく、知識同士がどのように結びついているかを視覚的に探索することで、新しい発見を促します。",
      previewImageUrl: "/home.png",
      previewImagePlaceholder: "Constell Preview",
      skills: ["Kotlin", "Jetpack Compose", "Supabase"],
      type: "Android App",
      links: {
        demo: undefined,
        github: "https://github.com/constell-app/constell-android",
      },
    };
    return Promise.resolve([constell]);
  }
}
