import { ChevronRight, GitBranch } from "lucide-react";
import type { PersonalInfo } from "~/model/personal-info";

export function Hero({ info }: { info: PersonalInfo }) {
  return (
    <section className="py-20 md:py-32 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="order-2 md:order-1 flex-1 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide">
          Class of 2028
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">{info.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium">{info.role}</h2>
        <p className="text-gray-600 leading-relaxed max-w-lg">{info.bio}</p>
        <div className="flex gap-4 pt-4">
          <a
            href="#works"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            View Works <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href={info.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <GitBranch className="w-5 h-5" /> GitHub
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2 flex-1 w-full flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl relative overflow-hidden bg-linear-to-tr from-blue-100 via-white to-cyan-50">
          <img src="/profile.jpg" alt={`${info.name} profile`} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
