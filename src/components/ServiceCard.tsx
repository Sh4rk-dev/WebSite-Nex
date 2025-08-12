interface ServicesCardProps {
  url: string;
  text: string;
}

export function ServicesCard({ text, url }: ServicesCardProps) {
  return (
    <div className="relative mt-16 flex h-47 w-40 items-end justify-center rounded-[50px] bg-custom-primary p-10">
      <div className="-top-16 absolute">
        <picture>
          <img alt="Marketing.png" height={142} src={url} width={142} />
        </picture>
      </div>

      <span className="text-center font-bold font-dm-sans text-custom-title">
        {text}
      </span>
    </div>
  );
}
