import Hero from '@/components/hero/hero';
import style from './home.module.css';
import AboutUs from '@/components/AboutUs/AboutUs';

export default function Home() {
  return (
    <>
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 via-pink-100 to-yellow-100" />
      <div className="absolute inset-0 z-10 pointer-events-none opacity-15 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEUAAAD///+l2Z/dAAAACklEQVR42mP8z8AABx8C9lWlnwsAAAAASUVORK5CYII=")`,
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="relative z-20 h-full w-full"><Hero /></div>
    </div>
    <AboutUs />
  </>
  );
}
