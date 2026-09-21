import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import SiteImage from "@/components/SiteImage";
import CaseMeta from "@/components/CaseMeta";
import CaseSection from "@/components/CaseSection";

export const metadata = {
  title: "Tez Shifo — Deen.dsgn",
  description:
    "Tez Shifo — медицинская платформа для пациентов и врачей. Упрощённая запись к врачу и единая дизайн-система.",
};

const META_FIELDS = [
  { label: "Роль", value: "Ведущий UX/UI дизайнер" },
  { label: "Тип продукта", value: "Медицинская платформа для записи к врачам" },
  { label: "Платформы", value: "Веб, мобильное" },
  { label: "Срок", value: "Июль 2024" },
  { label: "Результат", value: "Упрощённая запись к врачу, единая дизайн-система" },
];

export default function TezShifoCase() {
  return (
    <>
      <Nav />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-[100px]">
        <Reveal className="pt-10">
          <ArrowLink href="/#cases" arrow="left">Назад к кейсам</ArrowLink>
        </Reveal>
        <Reveal delay={0.03} className="pt-6 max-w-content">
          <p className="text-xs text-faint mb-4">Июль 2024</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-4">
            Tez Shifo — медицинская платформа для пациентов и врачей
          </h1>
          <p className="text-sm text-muted">
            B2C / B2B · Медицина · Веб-платформа
          </p>
        </Reveal>

        <CaseMeta fields={META_FIELDS} />

        <Reveal delay={0.05} className="py-10">
          <p className="max-w-content text-[15px] leading-relaxed text-white/85 mb-8">
            Коротко: Медицинская платформа, объединяющая пациентов и врачей. Спроектировал архитектуру, пользовательские сценарии и визуальный язык для двух аудиторий — пациентов и врачей.
          </p>
          <SiteImage src="/images/tez-shifo/hero.png" label="tez shifo — hero" ratio="960/453" className="rounded-[24px]" />
        </Reveal>

        <div className="flex flex-col gap-14 pb-20">
          <CaseSection
            heading="Исследование"
            body={[
              {
                type: "list",
                items: [
                  "Анализ конкурентов: изучил 4 платформы (Doctolib, Zocdoc, Яндекс.Здоровье, Медси Smart), обратил внимание на структуру поиска, профили врачей и интеграцию календаря. Заметил, что у некоторых аналогов перегруженные фильтры, а у других — мало информации о врачах.",
                  "Интервью с пользователями: провёл 7 интервью (4 пациента, 3 врача) через Google Meet. Пациенты рассказали, что им важно видеть отзывы и стаж врача, а врачам нужен быстрый доступ к расписанию и возможность отменять запись одним кликом. Один врач (50 лет) отметил, что боится сложных интерфейсов.",
                  "Наблюдение: попросил друга (имитация пациента) записаться к врачу через аналогичное приложение, чтобы засечь время и выявить проблемы. Это заняло 5 минут из-за запутанных фильтров.",
                ],
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/tez-shifo/issledovanie.png" label="tez shifo — исследование" ratio="960/453" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Изучение пользователей"
            body={[
              {
                type: "p",
                text: "Чтобы глубже понять аудиторию, я создал две пользовательские персоны: Амина, мама двоих детей, которая ищет педиатра для оффлайн-приёма, и доктор Рустам, терапевт, который проводит до десяти консультаций в день.",
              },
              {
                type: "p",
                text: "Исследование включало изучение аналогичных сервисов, интервью с потенциальными пользователями и наблюдение за процессом записи. Это помогло выявить основные задачи и боли:",
              },
              {
                type: "list",
                items: [
                  "Пациенты хотели видеть фото врача, рейтинг и отзывы.",
                  "Врачи хотели быстро управлять расписанием и отменять приём в один клик.",
                ],
              },
              {
                type: "p",
                text: "Главный вывод: интерфейс должен быть простым, логичным и доступным даже для пользователей с низкой цифровой грамотностью.",
              },
            ]}
          />

          <CaseSection
            heading="Проектирование решения"
            body={[
              {
                type: "p",
                text: "На основе исследований я спроектировал архитектуру платформы и создал wireframes.",
              },
              { type: "p", text: "Для пациента я сделал:" },
              {
                type: "list",
                items: [
                  "Упрощённый поиск с ключевыми фильтрами,",
                  "Карточку врача с фото, рейтингом и отзывами,",
                  "Минимальный путь до записи на приём.",
                ],
              },
              { type: "p", text: "Для врача я сделал:" },
              {
                type: "list",
                items: [
                  "Календарь с быстрым редактированием расписания,",
                  "Список пациентов,",
                  "Чат для общения и кнопки для переноса приёма одним кликом.",
                ],
              },
              {
                type: "p",
                text: "Все элементы интерфейса увеличил для удобства пользователей старше 40 лет, а навигацию сделал предсказуемой и интуитивной.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/tez-shifo/proektirovanie.png" label="tez shifo — проектирование" ratio="960/534" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Визуальный дизайн и система"
            body={[
              {
                type: "p",
                text: "Параллельно я разработал единую дизайн-систему, чтобы объединить все платформы. В основу легла тёмная цветовая палитра для комфортного просмотра, контрастная типографика и единый подход к карточкам контента.",
              },
              {
                type: "p",
                text: "Это позволило сохранить консистентность между TV, Mobile и Web и упростить дальнейшую работу разработки.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/tez-shifo/design-system.png" label="tez shifo — дизайн-система" ratio="1744/686" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Итоги проекта"
            body={[
              {
                type: "p",
                text: "Пациенты могут записываться на приём быстро и без лишних шагов, а врачи — легко управлять своим расписанием. Интерфейс учитывает возраст и уровень цифровой грамотности, а визуальный язык — единый для всех разделов платформы.",
              },
              {
                type: "p",
                text: "Проект Tez Shifo показал, как важно проектировать с фокусом на пользователя и создавать интерфейсы, которые одновременно просты и функциональны.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/tez-shifo/itogi.png" label="tez shifo — итоги" ratio="2998/1900" className="rounded-[24px]" />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
