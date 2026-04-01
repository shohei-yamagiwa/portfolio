import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import type { Route } from "./+types";
import { personalInfoRepository } from "~/global";
import { Hero } from "./components/hero";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Shohei Yamagiwa" }, { name: "description", content: "Shohei Yamagiwa's portfolio" }];
}

export async function loader({}: Route.LoaderArgs) {
  const personalInfo = await personalInfoRepository.getPersonalInfo();
  return personalInfo;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200">
      <Header />
      <Hero {...loaderData} />
      <Footer />
    </div>
  );
}
