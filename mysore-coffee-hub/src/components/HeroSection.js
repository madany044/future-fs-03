import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-starbucksGreen via-white to-starbucksGold py-12 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 md:px-12 lg:px-32 gap-12">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-starbucksGreen mb-4 drop-shadow-lg">
          A Cozy Cup Awaits
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-starbucksGreen/80">
          Savor the moments. Explore new favorites and classic brews at every sip.
        </p>
        <a
          href="#menu"
          className="inline-block px-8 py-3 rounded-full bg-starbucksGold text-starbucksGreen font-bold text-lg shadow hover:bg-white hover:text-starbucksGold transition"
        >
          See What is New
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/assets/hero.jpg"
          alt="Cafe Scene"
          width={480}
          height={380}
          className="rounded-3xl shadow-2xl border-4 border-starbucksGold"
          priority
        />
      </div>
      {/* Decorative element */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" className="hidden md:block absolute bottom-0 left-0 w-full h-44">
          <path fill="#00704A11" fillOpacity="1" d="M0,64L80,101.3C160,139,320,213,480,229.3C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
}
