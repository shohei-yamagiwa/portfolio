import { ExternalLink, GitBranch, Smartphone } from "lucide-react";
import type { Work } from "~/model/work";

export function Works({ works }: { works: Work[] }) {
  return (
    <section id="works" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
          <Smartphone className="w-8 h-8 text-blue-600" />
          Selected Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              // TODO: 画像を表示する
              <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <span className="text-gray-400 font-medium">{work.previewImagePlaceholder}</span>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                  {work.type}
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 grow leading-relaxed">{work.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {work.skills.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={work.links.github}
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <GitBranch className="w-4 h-4" /> Code
                  </a>
                  {work.links.demo && (
                    <a
                      href={work.links.demo}
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors ml-auto"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
