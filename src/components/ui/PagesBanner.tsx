const PagesBanner = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="bg-[url('https://campic-store-demo.myshopify.com/cdn/shop/files/bg_page.jpg?v=1691032098')] bg-cover bg-center h-96 flex justify-center items-center">
      <span className="text-white text-2xl font-bold">
        Home &gt; {currentPage}
      </span>
    </div>
  );
};

export default PagesBanner;
