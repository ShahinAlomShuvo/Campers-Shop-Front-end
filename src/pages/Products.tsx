import ProductFiltering from "@/components/products/ProductFiltering";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import ProductsCard from "@/components/ui/ProductsCard";
import { useGetProductsQuery } from "@/redux/api/api";
import { useAppSelector } from "@/redux/features/hooks";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
  stock: number;
};

const Products = () => {
  const category = useAppSelector((state) => state.product.category);
  const price = useAppSelector((state) => state.product.price);
  console.log(category);

  const query: Record<string, any> = {};
  query["category"] = category;
  query["price"] = price;
  const { data, error, isLoading } = useGetProductsQuery({ ...query });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }

  const products = data?.data || [];
  return (
    <>
      <PagesBanner currentPage="Products" />
      <Container>
        <ProductFiltering />
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-10">
          {products.map((product: TProduct) => (
            <ProductsCard key={product._id} {...product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
