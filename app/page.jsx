import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseList from "@/components/CaseList";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import HeroCTA from "@/components/HeroCTA";
import HeroTitle from "@/components/HeroTitle";
import Magnetic from "@/components/Magnetic";

const TIMELINE = [
  { period: "Май 2025 – Настоящее время", role: "Ведущий UX/UI дизайнер в Webase" },
  { period: "Январь 2024 – Май 2025", role: "Старший дизайнер в Intersoft Tech" },
  { period: "Июль – Январь 2023", role: "UX/UI дизайнер в Udevs" },
  { period: "Январь – Май 2023", role: "Веб-дизайнер в фрилансе" },
];

export default function Home() {
  return (
    <>
      <div className="bg-bg">
        <Nav />

        <main className="max-w-[1440px] mx-auto px-4 sm:px-[100px]">
          <div className="pt-10 sm:pt-14 pb-16 max-w-[1013px]">
            <HeroTitle />
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 pb-20">
            <Reveal delay={0.05} className="sm:w-[309px] shrink-0">
              <div className="flex flex-col gap-4">
                {TIMELINE.map((t) => (
                  <div key={t.period} className="flex flex-col gap-2">
                    <p className="text-[15px] text-faint">{t.period}</p>
                    <p className="text-[15px] font-medium text-white">{t.role}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex-1">
              <div className="flex flex-col gap-6 text-[15px] leading-[1.4]">
                <div className="flex flex-col gap-2">
                  <p className="text-faint">О себе</p>
                  <p className="text-white">
                    Сейчас веду UX/UI-направление в Webase, создавая интерфейсы, основанные
                    на данных и потребностях бизнеса.
                    <br />
                    Ранее работал в Intersoft Tech и Udevs над продуктами в сфере медицины,
                    медиа и образования.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-faint">Чем занимаюсь на работе</p>
                  <p className="text-white">– Понимаю бизнес и общаюсь с заказчиками на одном языке.</p>
                  <p className="text-white">– Работаю с гипотезами и аналитикой — ищу решения, которые приносят результат.</p>
                  <p className="text-white">– Создаю и внедряю дизайн-системы, готовые к передаче в код.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="flex justify-center pb-16 sm:pb-20">
            <Magnetic strength={0.25}>
              <HeroCTA />
            </Magnetic>
          </Reveal>
        </main>
      </div>

      <CaseList />

      <section className="bg-bg max-w-[1440px] mx-auto px-4 sm:px-[110px] py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl sm:text-[28px] font-bold text-white mb-8">Нравиться</h2>
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-8">
          <Reveal delay={0.05}>
            <SiteImage src="/images/home/mood-1.jpg" label="референс 1" ratio="963/551" tilt />
          </Reveal>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Reveal delay={0.08} className="flex-1">
              <SiteImage src="/images/home/mood-2.png" label="референс 2" ratio="1199/1067" tilt />
            </Reveal>
            <Reveal delay={0.11} className="flex-1">
              <SiteImage src="/images/home/mood-3.png" label="референс 3" ratio="1199/1067" tilt />
            </Reveal>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-stretch">
            <Reveal delay={0.05} className="flex-1">
              <SiteImage src="/images/home/mood-4.png" label="референс 4" ratio="1584/1470" className="h-full" tilt />
            </Reveal>
            <div className="flex flex-col gap-4 sm:gap-8 sm:w-[406px] shrink-0">
              <Reveal delay={0.08}>
                <SiteImage src="/images/home/mood-5.png" label="референс 5" ratio="406/441" tilt />
              </Reveal>
              <Reveal delay={0.11}>
                <SiteImage src="/images/home/mood-6.png" label="референс 6" ratio="406/262" tilt />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-bg">
        <Footer />
      </div>
    </>
  );
}
