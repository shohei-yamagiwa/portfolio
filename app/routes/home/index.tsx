import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import type { Route } from "./+types";
import { personalInfoRepository, skillsRepository, worksRepository } from "~/global";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Works } from "./components/works";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Shohei Yamagiwa" }, { name: "description", content: "Shohei Yamagiwa's portfolio" }];
}

export async function loader({}: Route.LoaderArgs) {
  const [personalInfo, skills, works] = await Promise.all([
    personalInfoRepository.getPersonalInfo(),
    skillsRepository.getSkills(),
    worksRepository.getWorks(),
  ]);
  return { personalInfo, skills, works };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { personalInfo, skills, works } = loaderData;
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200">
      <Header />
      <Hero info={personalInfo} />
      <Skills skills={skills} />
      <Works works={works} />
      <Footer />
    </div>
  );
}
