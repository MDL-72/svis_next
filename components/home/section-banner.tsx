type SectionBannerProps = {
  titleLine1: string;
  titleLine2?: string | null;
};

export default function SectionBanner({ titleLine1, titleLine2 }: SectionBannerProps) {
  return (
    <div className="relative w-full overflow-hidden bg-secondary py-8 shadow-inner">
      <div className="absolute inset-y-0 left-0 w-1 bg-gold md:w-1.5" />
      <div className="absolute inset-y-0 right-0 w-1 bg-gold md:w-1.5" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <h2 className="px-6 text-center font-heading text-xl font-semibold tracking-wide text-cream md:text-2xl lg:text-3xl">
        <span className="text-gold-light">{titleLine1}</span>
        {titleLine2 && (
          <>
            <br />
            <span className="text-cream">{titleLine2}</span>
          </>
        )}
      </h2>
    </div>
  );
}
