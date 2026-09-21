import Reveal from "./Reveal";

/**
 * One text section of a case study: a heading plus a body that can mix
 * plain paragraphs and bullet lists, matching the case-page structure
 * (О проекте, Задача и контекст, Итоги проекта, …).
 *
 * `body` is an array of blocks: { type: "p", text } | { type: "list", items }
 */
export default function CaseSection({ heading, body }) {
  return (
    <Reveal className="max-w-content py-2">
      <h2 className="text-[24px] font-medium mb-4 text-white">{heading}</h2>
      <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-white/60">
        {body.map((block, i) =>
          block.type === "list" ? (
            <ul key={i} className="flex flex-col gap-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-faint">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p key={i}>{block.text}</p>
          )
        )}
      </div>
    </Reveal>
  );
}
