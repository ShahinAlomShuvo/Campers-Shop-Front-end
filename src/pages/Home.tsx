import BestSeller from "@/components/home/BestSeller";
import Category from "@/components/home/Category";
import Experience from "@/components/home/Experience";
import Features from "@/components/home/Features";
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
        <Category />
        <Features />
      </Container>
    </>
  );
};

export default Home;
