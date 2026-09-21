import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import SiteImage from "@/components/SiteImage";
import CaseMeta from "@/components/CaseMeta";
import CaseSection from "@/components/CaseSection";

export const metadata = {
  title: "Nexora — Deen.dsgn",
  description:
    "Nexora — виртуальная платформа для работы и развлечений в VR. Интерфейс, сценарии и лендинг для технологичного продукта.",
};

const META_FIELDS = [
  { label: "Роль", value: "Ведущий UX/UI дизайнер" },
  { label: "Тип продукта", value: "VR-платформа для работы и развлечений" },
  { label: "Платформа", value: "Web, VR-среда" },
  { label: "Год начало", value: "Май 2024" },
  { label: "Результат", value: "Понятная VR-навигация и современный лендинг" },
];

export default function NexoraCase() {
  return (
    <>
      <Nav />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-[100px]">
        <Reveal className="pt-10">
          <ArrowLink href="/#cases" arrow="left">Назад к кейсам</ArrowLink>
        </Reveal>
        <Reveal delay={0.03} className="pt-6 max-w-content">
          <p className="text-xs text-faint mb-4">Май 2024</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-4">
            Nexora — виртуальная платформа для работы и развлечений в VR
          </h1>
          <p className="text-sm text-muted">
            B2C / B2B · VR · Веб-платформа и VR-интерфейс
          </p>
        </Reveal>

        <CaseMeta fields={META_FIELDS} />

        <Reveal delay={0.05} className="py-10">
          <p className="max-w-content text-[15px] leading-relaxed text-white/85 mb-8">
            Коротко: VR-платформа, объединяющая работу и игры в одном пространстве. Спроектировал интерфейс и сценарии для двух типов пользователей — новичков и опытных игроков. Отдельно сделал лендинг, который демонстрирует технологичность продукта.
          </p>
          <SiteImage src="/images/nexora/hero.jpg" label="nexora — hero" ratio="960/481" />
        </Reveal>

        <div className="flex flex-col gap-14 pb-20">
          <CaseSection
            heading="О проекте"
            body={[
              {
                type: "p",
                text: "Nexora — это виртуальная платформа, которая объединяет работу и игры в одном пространстве. Пользователи могут создавать виртуальные комнаты, взаимодействовать с коллегами, играть, проводить презентации и управлять средой прямо в VR.",
              },
              {
                type: "p",
                text: "Интерфейс напоминает Spatial, но с акцентом на интерактивность и свободу действий. В этом проекте я отвечал за UX/UI дизайн VR-интерфейса и лендинга — от архитектуры до финального визуального языка.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/nexora/o-proekte.jpg" label="nexora — после «О проекте»" ratio="2880/2048" />
          </Reveal>

          <CaseSection
            heading="Задача и контекст"
            body={[
              {
                type: "p",
                text: "Передо мной стояла задача создать интерфейс для VR-среды, который будет понятен и новичкам, и опытным пользователям. Основные вызовы:",
              },
              {
                type: "list",
                items: [
                  "Две аудитории — новые пользователи, которые не знакомы с VR, и опытные игроки, которым нужна свобода действий.",
                  "VR-навигация — перемещение в пространстве, управление объектами и комнатами.",
                  "Интерактивность — взаимодействие с коллегами, играми и презентациями.",
                  "Лендинг — нужно было показать технологичность платформы и привлечь новых пользователей.",
                ],
              },
              {
                type: "p",
                text: "Цель — создать удобный интерфейс и последовательность действий в VR, а также сделать лендинг, который демонстрирует возможности платформы.",
              },
            ]}
          />

          <Reveal delay={0.05} className="flex flex-col gap-6">
            <SiteImage src="/images/nexora/zadacha-1.jpg" label="nexora — задача 1" ratio="1732/638" className="rounded-[24px]" />
            <SiteImage src="/images/nexora/zadacha-2.jpg" label="nexora — задача 2" ratio="1284/896" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Лендинг"
            body={[
              {
                type: "p",
                text: "Лендинг платформы отражает все возможности Nexora:",
              },
              {
                type: "list",
                items: [
                  "Блок с демонстрацией работы в VR — видео или GIF с VR-сценами.",
                  "Преимущества платформы — уникальные функции и возможности.",
                  "Призыв к действию — регистрация и запуск приложения.",
                ],
              },
              {
                type: "p",
                text: "Дизайн лендинга получился современным и технологичным — он делает первый шаг взаимодействия простым и привлекательным.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/nexora/lending.jpg" label="nexora — лендинг" ratio="3840/2160" className="rounded-[24px]" />
          </Reveal>

          <CaseSection
            heading="Итоги проекта"
            body={[
              {
                type: "p",
                text: "В результате работы была создана понятная и технологичная VR-платформа.",
              },
              { type: "p", text: "Что удалось сделать:" },
              {
                type: "list",
                items: [
                  "Спроектировать интерфейс для VR-среды — понятный и новичкам, и опытным пользователям.",
                  "Разработать сценарии взаимодействия — от перемещения до управления объектами.",
                  "Создать визуальный язык — тёмная палитра, анимации, подсказки.",
                  "Сделать лендинг — современный и демонстрирующий возможности платформы.",
                  "Обеспечить консистентность между VR-интерфейсом и веб-версией.",
                ],
              },
              {
                type: "p",
                text: "Что я вынес из этого проекта: проект позволил углубить опыт работы с VR-интерфейсами, научил проектировать под пространственную навигацию и учитывать особенности восприятия в шлеме. Также усилил навыки работы с 3D-командой и создания лендингов для технологичных продуктов.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/nexora/itogi.jpg" label="nexora — итоги" ratio="960/527" className="rounded-[24px]" />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
