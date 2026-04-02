import { Code2, Globe, Server, Smartphone, Terminal } from "lucide-react";
import type { ReactNode } from "react";
import type { Category, Skill } from "~/model/skill";

export function Skills({ skills }: { skills: Skill[] }) {
  const categoryToIcon: Record<Category, ReactNode> = {
    Frontend: <Globe className="w-5 h-5 text-blue-500" />,
    Backend: <Server className="w-5 h-5 text-purple-500" />,
    Mobile: <Smartphone className="w-5 h-5 text-green-500" />,
    ToolsAndOthers: <Terminal className="w-5 h-5 text-gray-500" />,
  };
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-blue-600" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">{categoryToIcon[skill.category]}</div>
                <h3 className="font-semibold text-gray-800">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
