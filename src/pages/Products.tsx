import ProductFiltering from "@/components/products/ProductFiltering";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import ProductsCard from "@/components/ui/ProductsCard";

const Products = () => {
  return (
    <>
      <PagesBanner currentPage="Products" />
      <Container>
        <ProductFiltering />
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-10">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </Container>
    </>
  );
};

export default Products;
