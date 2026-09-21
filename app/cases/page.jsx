import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import CaseRow from "@/components/CaseRow";
import { CASES } from "@/components/CaseList";

export const metadata = {
  title: "Кейсы — Deen.dsgn",
  description: "Все кейсы Deen.dsgn — UX/UI дизайн проекты.",
};

export default function CasesPage() {
  return (
    <>
      <div className="bg-bg">
        <Nav />

        <main className="max-w-[1440px] mx-auto px-4 sm:px-[100px]">
          <Reveal className="pt-10">
            <ArrowLink href="/" arrow="left">Назад</ArrowLink>
          </Reveal>

          <Reveal delay={0.05} className="pt-16 pb-8">
            <h1 className="text-[22px] sm:text-[28px] font-medium tracking-[-0.02em] text-soft">
              Последние кейсы
            </h1>
          </Reveal>
        </main>

        <Reveal delay={0.08}>
          <div className="relative hidden sm:grid grid-cols-[702fr_464fr_74fr] items-center max-w-[1440px] mx-auto px-4 sm:px-[100px] py-2 text-[13px] text-muted">
            <span>#&nbsp;&nbsp;ПРОЕКТ</span>
            <span>ОПИСАНИЕ</span>
            <span className="text-right">ГОД</span>
            <span className="absolute inset-x-0 bottom-0 h-px bg-line" />
          </div>
          <div className="max-w-[1440px] mx-auto pb-20 overflow-x-hidden">
            {CASES.map((item) => (
              <CaseRow key={item.slug} item={item} />
            ))}
          </div>
        </Reveal>
      </div>

      <div className="bg-bg">
        <Footer />
      </div>
    </>
  );
}
