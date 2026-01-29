import heroImage from "../assets/backgrounds/hero_image.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      <img
        src={heroImage}
        alt="Dinda Background"
        className="absolute inset-0 w-full object-cover"
      />
    </section>
  );
}
