export function CtaLabel({ desktop, mobile }: { desktop: string; mobile: string }) {
  return (
    <>
      <span className="cta-label-desktop" aria-hidden="true">{desktop}</span>
      <span className="cta-label-mobile" aria-hidden="true">{mobile}</span>
    </>
  );
}
