import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Shohei Yamagiwa" }, { name: "description", content: "Shohei Yamagiwa's portfolio" }];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200">
      <Header />
      <Footer />
    </div>
  );
}
