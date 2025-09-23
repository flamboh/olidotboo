const BAR_COUNT = 48;

export function SoundWaveBackground() {
  const bars = Array.from({ length: BAR_COUNT }, (_, index) => index);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-[140%] w-[140%] max-w-5xl items-center justify-center gap-[0.38rem] opacity-70 blur-sm md:gap-[0.44rem]">
          {bars.map((bar) => {
            const progress = bar / (BAR_COUNT - 1);
            const baseHeight = 36 + Math.sin(progress * Math.PI) * 48;
            const duration = 2.4 + ((bar % 5) * 0.18);

            return (
              <span
                key={bar}
                className="soundwave-bar block w-[0.18rem] rounded-full bg-gradient-to-t from-primary/20 via-primary/70 to-primary/30"
                style={{
                  height: `${baseHeight}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${bar * 0.075}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
