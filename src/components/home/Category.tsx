import CategoryCards from "../ui/CategoryCards";

const Category = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-20">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Tents & Shelter</h2>
            <hr />
          </div>
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Camp Cooking & Dining</h2>
            <hr />
          </div>
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Backpacks & Bags</h2>
            <hr />
          </div>
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
        </div>
      </div>
    </div>
  );
};

export default Category;
