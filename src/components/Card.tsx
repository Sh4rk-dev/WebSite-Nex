import { ArrowIcon } from './Icons/ArrowIcon';

interface CardProps {
  tag: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export function Card({ tag, title, icon, description }: CardProps) {
  return (
    <div className="group relative z-0 w-full p-px">
      <div className="absolute inset-0 z-0 bg-gray-300 [clip-path:var(--clip-shape-bottom-cut)] group-hover:bg-custom-primary" />

      <div className="relative inset-0 z-0 flex h-fit flex-col justify-center gap-4.5 bg-white p-10 [clip-path:var(--clip-shape-bottom-cut)]">
        <li className="font-dm-sans text-custom-body">{tag}</li>

        <h1 className="font-marcellus text-2xl xl:text-3xl">{title}</h1>

        <div className="hidden xl:flex">{icon}</div>

        <p
          className="font-dm-sans text-custom-body leading-6.5"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="group-hover:-rotate-45 absolute right-0 bottom-0 z-10 flex size-14 items-center justify-center rounded-full border border-custom-border bg-white transition-all duration-300 group-hover:bg-custom-primary">
        <ArrowIcon />
      </div>
    </div>
  );
}
