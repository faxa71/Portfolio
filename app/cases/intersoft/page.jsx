import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import SiteImage from "@/components/SiteImage";
import CaseMeta from "@/components/CaseMeta";
import CaseSection from "@/components/CaseSection";

export const metadata = {
  title: "Intersoft — Deen.dsgn",
  description:
    "Intersoft — корпоративный сайт IT-компании. Полный визуальный дизайн — от концепции до анимаций и микроинтеракций.",
};

const META_FIELDS = [
  { label: "Роль", value: "UX/UI дизайнер" },
  { label: "Тип продукта", value: "Корпоративный сайт IT-компании" },
  { label: "Платформа", value: "Веб" },
  { label: "Год начало", value: "Июнь 2024" },
  { label: "Результат", value: "Современный сайт с единым визуальным языком и 3D-направлением" },
];

export default function IntersoftCase() {
  return (
    <>
      <Nav />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-[100px]">
        <Reveal className="pt-10">
          <ArrowLink href="/#cases" arrow="left">Назад к кейсам</ArrowLink>
        </Reveal>
        <Reveal delay={0.03} className="pt-6 max-w-content">
          <p className="text-xs text-faint mb-4">Июнь 2024</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-4">
            Intersoft — корпоративный сайт IT-компании
          </h1>
          <p className="text-sm text-muted">
            B2B · Корпоративный сайт · IT-услуги
          </p>
        </Reveal>

        <CaseMeta fields={META_FIELDS} />

        <Reveal delay={0.05} className="py-10">
          <p className="max-w-content text-[15px] leading-relaxed text-white/85 mb-8">
            Коротко: Корпоративный сайт IT-компании Intersoft с услугами, кейсами, блогом и формой связи. Отвечал за полный визуальный дизайн — от концепции до финальных анимаций и микроинтеракций.
          </p>
          <SiteImage src="/images/intersoft/hero.png" label="intersoft — hero" ratio="960/540" />
        </Reveal>

        <div className="flex flex-col gap-14 pb-20">
          <CaseSection
            heading="О проекте"
            body={[
              {
                type: "p",
                text: "Intersoft — IT-компания из Ташкента, которая создаёт современные цифровые продукты: от веб- и мобильных приложений до визуальных 3D-решений и UX/UI-дизайна. На сайте представлены услуги компании, кейсы, блог и форма для связи с клиентами.",
              },
              {
                type: "p",
                text: "В этом проекте я отвечал за полный визуальный дизайн сайта — от концепции до готовых анимаций и микроинтеракций. Мне нужно было показать не только стиль и тему, но и характер команды — инновационный, человечный и ориентированный на реальные цели клиентов.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/intersoft/o-proekte.png" label="intersoft — после «О проекте»" ratio="960/636" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Задача и контекст"
            body={[
              {
                type: "p",
                text: "Передо мной стояла задача создать сайт, который отражает ценности компании, а также делает сложные услуги понятными и доступными для посетителей. Основные вызовы:",
              },
              {
                type: "list",
                items: [
                  "Широкий спектр услуг — 3D-дизайн, веб-разработка, UX/UI-дизайн и мобильные приложения.",
                  "Доверие и профессионализм — нужно было передать уверенность и надёжность.",
                  "Человечность — компания хотела показать тёплый, ориентированный на клиента подход.",
                  "Визуальный язык — единый стиль для всех разделов.",
                ],
              },
              {
                type: "p",
                text: "Цель — создать сайт, который покажет экспертизу компании и поможет посетителям легко найти нужную информацию и связаться с командой.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/intersoft/zadacha.png" label="intersoft — после «Задача и контекст»" ratio="3840/2520" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Исследование и планирование"
            body={[
              {
                type: "p",
                text: "Я начал с анализа сайтов конкурентов, изучал лучшие практики в IT-дизайне и проработал структуру страниц. Нужно было учесть:",
              },
              {
                type: "list",
                items: [
                  "чёткое разделение услуг;",
                  "лёгкое восприятие портфолио проектов;",
                  "удобный путь к контакту;",
                  "адаптивность и доступность.",
                ],
              },
              {
                type: "p",
                text: "На основе этого сформировал информационную архитектуру, которая удобна и понятна любой аудитории — от потенциального клиента до партнёра.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/intersoft/issledovanie.png" label="intersoft — исследование" ratio="3840/2160" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Дизайн и визуальный язык"
            body={[
              {
                type: "p",
                text: "На основе исследования я спроектировал архитектуру платформы и создал wireframes.",
              },
              { type: "p", text: "Особое внимание уделялось:" },
              {
                type: "list",
                items: [
                  "визуальной иерархии — чтобы сложные услуги были понятны;",
                  "портфолио — чтобы кейсы легко воспринимались;",
                  "микроанимациям и интерактивности — чтобы сайт был живым;",
                  "единому визуальному языку — тёмная палитра, контрастная типография, единый подход к карточкам контента.",
                ],
              },
            ]}
          />

          <CaseSection
            heading="Итоги проекта"
            body={[
              {
                type: "p",
                text: "В результате работы был создан современный, лёгкий в восприятии и технологичный сайт.",
              },
              { type: "p", text: "Что удалось сделать:" },
              {
                type: "list",
                items: [
                  "Создать современную структуру сайта — удобная навигация и логичная архитектура.",
                  "Показать экспертизу компании — через портфолио, услуги и визуальный язык.",
                  "Унифицировать визуальный стиль — единая дизайн-система для всех разделов.",
                  "Добавить микроанимации — сайт стал живым и интерактивным.",
                  "Обеспечить удобный путь к контакту — посетитель легко находит нужную информацию.",
                ],
              },
              {
                type: "p",
                text: "Что я вынес из этого проекта: проект позволил углубить опыт работы с корпоративными сайтами, научил передавать характер и ценности компании через визуальный язык и усилил навыки работы с 3D-командой и микроанимациями.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/intersoft/itogi.png" label="intersoft — итоги" ratio="2492/1730" />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
