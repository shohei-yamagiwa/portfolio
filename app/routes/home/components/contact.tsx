import { Mail } from "lucide-react";
import type { PersonalInfo } from "~/model/personal-info";

export function Contact({ info }: { info: PersonalInfo }) {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          現在は28卒でのインターンシップや本選考に向けた機会を探しています。
          私の制作物やスキルにご関心を持っていただけましたら、ご連絡いただければ幸いです。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${info.email}`}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
