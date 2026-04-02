import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import type { Route } from "./+types";
import { experienceRepository, personalInfoRepository, skillsRepository, worksRepository } from "~/global";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Works } from "./components/works";
import { Contact } from "./components/contact";
import { Experiences } from "./components/experiences";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Shohei Yamagiwa" }, { name: "description", content: "Shohei Yamagiwa's portfolio" }];
}

export async function loader({}: Route.LoaderArgs) {
  const [personalInfo, skills, works, experiences] = await Promise.all([
    personalInfoRepository.getPersonalInfo(),
    skillsRepository.getSkills(),
    worksRepository.getWorks(),
    experienceRepository.getExperiences(),
  ]);
  return { personalInfo, skills, works, experiences };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { personalInfo, skills, works, experiences } = loaderData;
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200">
      <Header />
      <Hero info={personalInfo} />
      <Experiences experiences={experiences} />
      <Skills skills={skills} />
      <Works works={works} />
      <Contact info={personalInfo} />
      <Footer />
    </div>
  );
}
