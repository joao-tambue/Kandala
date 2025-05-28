import Hero from '@/components/hero/hero';
import AboutUs from '@/components/AboutUs/AboutUs';
import More from '@/components/AboutUs/more/more';
import Scrolls from '@/components/scroll-cards/scroll-card';

export default function Home() {
  return (
    <>
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 via-pink-100 to-yellow-100" /> */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-15 mix-blend-soft-light" />
        <div className="relative z-20 h-full w-full">
          <Hero />
        </div>
      </div>
      <AboutUs />
      <More />
      <Scrolls />
    </>
  );
}

