import { ChevronRight } from 'lucide-react';

interface StepsProps {
  title: string;
  description: string;
  step: number;
  urlImage: string;
}

export function Steps({ description, step, title, urlImage }: StepsProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center rounded-full border border-custom-title p-5">
          <picture>
            <img alt="RocketIcon.png" height={45} src={urlImage} width={45} />
          </picture>
        </div>

        <div className="flex h-0.5 w-full flex-row items-center justify-end bg-custom-title">
          <div className="-right-2.5 relative">
            <ChevronRight size={24} />
          </div>
        </div>

        <h1 className="pl-5 font-bold font-plus-jakarta-sans text-4xl text-custom-border">
          0{step}
        </h1>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <h1 className="font-marcellus text-2xl text-custom-title">{title}</h1>
        <p
          className="font-dm-sans text-custom-body leading-7"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
