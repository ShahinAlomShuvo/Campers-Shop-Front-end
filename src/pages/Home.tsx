import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <Container>
        <Service />
      </Container>
    </>
  );
};

export default Home;
