import BestSeller from "@/components/home/BestSeller";
import Experience from "@/components/home/Experience";
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
        <Experience />
      </Container>
    </>
  );
};

export default Home;
