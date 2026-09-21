import Reveal from "./Reveal";
import CaseRow from "./CaseRow";

export const CASES = [
  { num: "01", slug: "webimzo", name: "Webimzo", tag: "Продукт / Веб / Моушн", year: "2025", live: true },
  { num: "02", slug: "webslot", name: "Webslot", tag: "Бренд / Диджитал / Редакционный", year: "2025", live: true },
  { num: "03", slug: "splay", name: "Splay", tag: "Айдентика / Соцсети / Моушн", year: "2024", live: true },
  { num: "04", slug: "idrok", name: "Idrok", tag: "Айдентика / 3D / Моушн", year: "2025", live: true },
  { num: "05", slug: "nexora", name: "Nexora", tag: "Бренд / Арт-дирекшн / Моушн", year: "2024", live: true },
  { num: "06", slug: "tez-shifo", name: "Tez Shifo", tag: "Продукт / Веб / Медицина", year: "2024", live: true },
  { num: "07", slug: "intersoft", name: "Intersoft", tag: "Бренд / Лендинг / Моушн", year: "2024", live: true },
];

export default function CaseList() {
  return (
    <section id="cases" className="bg-panel py-14 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <h2 className="text-[22px] sm:text-[28px] font-medium tracking-[-0.02em] text-soft px-4 sm:px-[100px] mb-8">
            Последние кейсы
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative hidden sm:grid grid-cols-[702fr_464fr_74fr] items-center px-[100px] py-2 text-[13px] text-muted">
            <span>#&nbsp;&nbsp;ПРОЕКТ</span>
            <span>ОПИСАНИЕ</span>
            <span className="text-right">ГОД</span>
            <span className="absolute inset-x-1/2 bottom-0 h-px w-screen -translate-x-1/2 bg-line" />
          </div>
          <div>
            {CASES.map((item) => (
              <CaseRow key={item.slug} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
