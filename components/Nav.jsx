import ArrowLink from "./ArrowLink";

export default function Nav() {
  return (
    <header className="flex items-start justify-between px-4 sm:px-[100px] py-[24px] max-w-[1440px] mx-auto">
      <a href="/" className="text-2xl font-medium tracking-tight">
        Deen.dsgn
      </a>
      <div className="hidden sm:flex items-start gap-6">
        <span className="text-sm text-faint pt-0.5">Ссылки</span>
        <nav className="flex flex-col items-end gap-2">
          <ArrowLink href="/cv">CV</ArrowLink>
          <ArrowLink href="https://linkedin.com" external>Linkedin</ArrowLink>
          <ArrowLink href="https://t.me" external>Telegram</ArrowLink>
          <ArrowLink href="/#cases">Кейсы</ArrowLink>
        </nav>
      </div>
      <nav className="flex sm:hidden flex-col items-end gap-2">
        <ArrowLink href="/cv">CV</ArrowLink>
        <ArrowLink href="https://linkedin.com" external>Linkedin</ArrowLink>
        <ArrowLink href="https://t.me" external>Telegram</ArrowLink>
        <ArrowLink href="/#cases">Кейсы</ArrowLink>
      </nav>
    </header>
  );
}
