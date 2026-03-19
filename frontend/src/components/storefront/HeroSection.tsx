export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 py-16 md:min-h-[80vh] md:py-24 lg:min-h-[90vh]"
      style={{
        backgroundImage: 'url(https://instasize.com/api/image/76f8d9c7bdac104d2a0b34b3b3a3e659f117597b522b9217f79dd5b2a785b056.png)',
        backgroundSize: '100% 100%',
      }}
    >
      {/* Animated Lines Background */}
      <div className="pointer-events-none absolute inset-0">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <span
            key={i}
            className="absolute h-full w-px bg-white/8"
            style={{ left: `${(100 / 8) * i}%` }}
          >
            <span
              className="absolute h-8 w-1 bg-[#fc8004]"
              style={{
                top: `${25 + (i * 10) % 50}%`,
                left: '50%',
                animation: `bounceDot ${20 + i * 5}s infinite`,
              }}
            />
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h3
          className="mb-2 text-4xl font-bold text-white md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ textShadow: '5px 5px 10px black' }}
        >
          Delivering Only 100%
        </h3>
        <h3
          className="text-2xl font-bold text-white md:text-4xl lg:text-5xl"
          style={{ textShadow: '5px 5px 10px black' }}
        >
          Genuine Supplements
        </h3>
      </div>
    </section>
  );
}
