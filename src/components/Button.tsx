import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'flex cursor-pointer flex-row items-center duration-300 hover:shadow-xl',
  variants: {
    variant: {
      primary:
        'hidden md:flex md:bg-custom-primary md:px-10 md:py-3 md:font-kanit md:font-medium md:hover:bg-custom-primary/80',
      secondary:
        'flex h-36 w-36 items-center justify-center rounded-full bg-custom-primary hover:shadow-custom-primary/10 hover:shadow-xl',
      tertiary:
        'flex items-center justify-center border border-custom-border p-4',
      quaternary:
        'flex h-36 w-36 items-center justify-center rounded-full border border-custom-title',
      mobile:
        'flex items-center justify-center border border-custom-border bg-custom-primary p-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = VariantProps<typeof button> &
  React.HTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactNode;
    text?: string;
  };

export function Button({ icon, text, variant, ...rest }: ButtonProps) {
  return (
    <button className={button({ variant })} type="button" {...rest}>
      <p className="font-bold font-dm-sans">{text}</p>

      {icon}
    </button>
  );
}
