import Container from "../Container";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="w-full">
          <img className="block w-full object-cover" src="/hero.webp" alt="hero image" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
