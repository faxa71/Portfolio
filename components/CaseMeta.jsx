import Reveal from "./Reveal";

/**
 * Meta table for a case-study header: Роль / Тип продукта / Платформы / Срок /
 * Результат (or whatever fields a given case provides). `fields` is an array
 * of { label, value }. Labels sit in a fixed-width left column so every
 * value starts at the same x position across rows — a real grid, rather
 * than text right-justified to the row edge (which lines up on the right
 * but leaves the values' own starting edge different on every row).
 */
export default function CaseMeta({ fields }) {
  return (
    <Reveal delay={0.1} className="max-w-content py-8 border-t border-line">
      <dl className="flex flex-col">
        {fields.map((f, i) => (
          <div
            key={f.label}
            className={`flex items-start gap-4 py-3.5 sm:py-4 ${
              i !== fields.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <dt className="w-[120px] sm:w-[180px] shrink-0 text-sm sm:text-base text-white/60">
              {f.label}
            </dt>
            <dd className="flex-1 text-sm sm:text-base text-white">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
