export function DotsBackground() {
  return (
    <div className='animate-wiggle pointer-events-none absolute inset-0 z-0 h-full w-full animate-[moveBgDiagonal_2s_linear_infinite] bg-transparent bg-[radial-gradient(#969696_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:25px_25px]' />
  );
}
