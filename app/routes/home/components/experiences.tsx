import { Briefcase, Flag, GraduationCap } from "lucide-react";
import type { Experience } from "~/model/expeience";

export function Experiences({ experiences }: { experiences: Experience[] }) {
  // Sort experiences by end date
  const sortedExperiences = experiences.toSorted((a, b) => {
    const aDate = a.endDate === "present" ? new Date() : (a.endDate ?? a.startDate);
    const bDate = b.endDate === "present" ? new Date() : (b.endDate ?? b.startDate);
    return bDate.getTime() - aDate.getTime();
  });

  const typeToIcon = (type: "education" | "work" | "other") => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4" />;
      case "work":
        return <Briefcase className="w-4 h-4" />;
      case "other":
        return <Flag className="w-4 h-4" />;
    }
  };
  const dateToPeriod = (start: Date, end: Date | "present" | undefined) => {
    const startStr = `${start.getFullYear()}/${String(start.getMonth() + 1).padStart(2, "0")}`;
    const endStr =
      end === "present"
        ? "Present"
        : end === undefined
          ? undefined
          : `${end.getFullYear()}/${String(end.getMonth() + 1).padStart(2, "0")}`;

    if (endStr === undefined) {
      return startStr;
    }
    return `${startStr} - ${endStr}`;
  };
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-600" />
          Experience
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {sortedExperiences.map((exp) => (
            <div
              key={exp.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {typeToIcon(exp.type)}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col mb-2">
                  <span className="text-sm font-semibold text-blue-600 mb-1">
                    {dateToPeriod(exp.startDate, exp.endDate)}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-sm font-medium text-gray-500">{exp.organization}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-3 whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
