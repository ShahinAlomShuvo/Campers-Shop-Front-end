import BestSeller from "@/components/home/BestSeller";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <Container>
        <Service />
        <BestSeller />
      </Container>
    </>
  );
};

export default Home;
