import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import SiteImage from "@/components/SiteImage";
import CaseMeta from "@/components/CaseMeta";
import CaseSection from "@/components/CaseSection";
import CaseOutline from "@/components/CaseOutline";

export const metadata = {
  title: "Splay — Deen.dsgn",
  description:
    "SPlay — редизайн мультиплатформенного стримингового сервиса для 500 000+ пользователей на Smart TV, Mobile и Web.",
};

const META_FIELDS = [
  { label: "Роль", value: "UX/UI дизайнер — полный цикл" },
  { label: "Масштаб", value: "500 000+ активных пользователей, 200 000+ платных подписок" },
  { label: "Платформы", value: "Smart TV, мобильные, веб" },
  { label: "Год начало", value: "2025" },
  { label: "Результат", value: "Время поиска фильма сократилось с 40 до 15 секунд, дизайн одобрен и передан в разработку" },
];

export default function SplayCase() {
  return (
    <>
      <Nav />
      <CaseOutline />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-[100px]">
        <Reveal className="pt-10">
          <ArrowLink href="/cases" arrow="left">Назад к кейсам</ArrowLink>
        </Reveal>
        <Reveal delay={0.03} className="pt-6 max-w-content">
          <p className="text-xs text-faint mb-4">Октябрь 2024 г</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-4">
            SPlay — редизайн мультиплатформенного стримингового сервиса
          </h1>
          <p className="text-sm text-muted">
            B2C · Стриминг · Smart TV / Mobile / Web
          </p>
        </Reveal>

        <CaseMeta fields={META_FIELDS} />

        <Reveal delay={0.05} className="py-10">
          <SiteImage src="/images/splay/hero.png" label="splay — hero" ratio="960/453" />
        </Reveal>

        <div className="flex flex-col gap-14 pb-20">
          <CaseSection
            heading="Контекст и цель"
            body={[
              {
                type: "p",
                text: "Проект заключался в полном редизайне существующей стриминговой платформы, которая предоставляет доступ к фильмам и сериалам на трёх устройствах: телевизорах (Smart TV), мобильных телефонах (iOS/Android) и веб-браузерах. Заказчик поставил цель обновить устаревший интерфейс, который не соответствовал современным стандартам UX/UI, и улучшить пользовательский опыт. Основной фокус — упростить поиск контента, адаптировать дизайн под разные экраны и повысить удержание пользователей.",
              },
            ]}
          />

          <CaseSection
            heading="Моя роль"
            body={[
              {
                type: "p",
                text: "Я взял на себя весь цикл UX/UI-дизайна: исследование пользователей, анализ конкурентов, прототипирование, тестирование, создание дизайн-системы и подготовку финальных макетов для передачи разработчикам.",
              },
            ]}
          />

          <CaseSection
            heading="Исследование"
            body={[
              {
                type: "p",
                text: "Перед проектированием провёл три параллельных этапа исследования:",
              },
              {
                type: "list",
                items: [
                  "Анализ конкурентов — изучил 5 популярных платформ (Netflix, Amazon Prime, Кинопоиск, IVI, Disney+), уделяя внимание навигации, визуальному стилю и персонализации. Сильные стороны конкурентов — быстрый доступ к рекомендациям и минималистичная структура.",
                  "Интервью с пользователями — провёл 8 глубинных интервью (по 20–30 минут) через Zoom: 3 пользователя ТВ, 3 — мобильных устройств, 2 — веб. Спрашивал о привычках просмотра, проблемах с текущими платформами и ожиданиях от дизайна. Выяснил, что на ТВ люди часто теряются в меню, а на мобильных устройствах случайно нажимают не туда.",
                  "Опрос — создал опрос в Google Forms с вопросами вроде «Что для вас важнее: скорость загрузки или красивый дизайн?» и «Как часто вы пользуетесь поиском?». Получил 25 ответов, 80% выбрали «удобство поиска» как приоритет.",
                ],
              },
            ]}
          />

          <CaseSection
            heading="Проблемы"
            body={[
              {
                type: "p",
                text: "По итогам исследования выделились три группы проблем — отдельно для каждой платформы:",
              },
              {
                type: "list",
                items: [
                  "ТВ-версия — мелкий текст (12–14 pt) не читался с расстояния 2–3 метра, управление пультом было нелогичным: слишком много шагов до выбора фильма.",
                  "Мобильная версия — элементы интерфейса (кнопки, иконки) располагались слишком близко, из-за чего пользователи с крупными пальцами часто промахивались. Меню занимало половину экрана, закрывая контент.",
                  "Веб-версия — поиск был перегружен фильтрами (жанр, год, рейтинг), а рекомендации не учитывали историю просмотров, что раздражало пользователей.",
                ],
              },
            ]}
          />

          <Reveal delay={0.05}>
            <SiteImage src="/images/splay/analiz.png" label="splay — анализ проблем" ratio="960/557" />
          </Reveal>

          <CaseSection
            heading="Процесс разработки"
            body={[
              {
                type: "p",
                text: "Карта пути пользователя (CJM): нарисовал в Miro три сценария — «поиск новинки на ТВ», «продолжение сериала на телефоне», «выбор фильма на веб». Это помогло выявить узкие места, например лишние клики в веб-версии.",
              },
              {
                type: "p",
                text: "Wireframes: создал чёрно-белые прототипы в Figma для всех платформ. Для ТВ — крупные плитки контента, для мобильной версии — свайп-меню, для веб — упрощённая панель поиска.",
              },
              {
                type: "p",
                text: "Первое тестирование: показал прототипы 5 пользователям (по 1–2 на платформу). Фидбек: на ТВ просили ещё больше увеличить шрифты, на мобильной — убрать лишние анимации, на веб — добавить кнопку «случайный фильм».",
              },
              {
                type: "p",
                text: "Итерации: увеличил шрифты до 18–20 pt для ТВ, убрал анимации с мобильной версии, добавил функцию «Random Pick» для веб.",
              },
              {
                type: "p",
                text: "Дизайн-система: разработал единую систему — основные цвета (тёмно-синий фон, белый текст, акцентный красный), шрифт Roboto для читаемости, компоненты (кнопки, карточки фильмов).",
              },
              {
                type: "p",
                text: "Финальные макеты: создал высококачественные экраны с анимациями (переходы между категориями, hover-эффекты для веб) и экспортировал их в Zeplin с комментариями для разработчиков.",
              },
            ]}
          />

          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 gap-6 max-w-content">
              <div className="flex flex-col gap-3">
                <p className="text-xl text-white">До</p>
                <SiteImage src="/images/splay/do.png" label="splay — до" ratio="1/1" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xl text-white">После</p>
                <SiteImage src="/images/splay/posle.png" label="splay — после" ratio="1/1" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <SiteImage src="/images/splay/design-system.png" label="splay — дизайн-система" ratio="960/506" />
          </Reveal>

          <CaseSection
            heading="Результат"
            body={[
              {
                type: "p",
                text: "Прототип протестировали 6 пользователей: время поиска фильма сократилось с 40 до 15 секунд, 5 из 6 отметили интуитивность интерфейса. Заказчик одобрил дизайн, проект передан в разработку.",
              },
            ]}
          />

          <Reveal delay={0.05} className="flex flex-col gap-6">
            <SiteImage src="/images/splay/itogi-1.jpg" label="splay — итоги 1" ratio="960/506" />
            <SiteImage src="/images/splay/itogi-2.jpg" label="splay — итоги 2" ratio="960/506" />
            <SiteImage src="/images/splay/itogi-3.jpg" label="splay — итоги 3" ratio="960/623" />
          </Reveal>

          <CaseSection
            heading="Инструменты"
            body={[
              {
                type: "list",
                items: [
                  "Figma — прототипы, макеты",
                  "Miro — CJM, схемы",
                  "Zeplin — экспорт",
                  "Google Forms — опросы",
                  "Zoom — интервью",
                ],
              },
            ]}
          />

          <Reveal delay={0.05} className="max-w-content">
            <ArrowLink
              href="https://www.figma.com/design/95xh7OMU1VO2uDYTQWSx1m/Splay?node-id=0-1&t=PZCHvlTnwaINoQaa-1"
              external
            >
              Смотреть визуал в Figma
            </ArrowLink>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
