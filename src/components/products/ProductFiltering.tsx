import { useState } from "react";
import CategoryFilter from "./CategoryFIlter";
import PriceFilter from "./PriceFilter";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Sorting from "./Sorting";

const ProductFiltering = () => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  // Function to clear all filters
  const clearFilters = () => {
    setCategory("");
    setSearchTerm("");
    setPrice("");
    setSort("");
  };

  const handleSearch = () => {
    // Add your search logic here
  };
  return (
    <div className="flex space-x-4 items-center justify-between p-10 border rounded shadow-lg my-14">
      {/* Category Filter */}
      <CategoryFilter setCategory={setCategory} />

      {/* Price Filter */}
      <PriceFilter setPrice={setPrice} />

      {/* Search Filter */}
      <div>
        <form onSubmit={handleSearch} className="flex space-x-4 items-center">
          <Input
            onBlur={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search products"
          />
          <Button className="bg-[#c19d60]" type="submit">
            Search
          </Button>
        </form>
      </div>

      {/* Sorting */}
      <Sorting setSort={setSort} />

      {/* Clear Button */}
      <Button onClick={clearFilters} className=" bg-red-500 text-white">
        Clear Filters
      </Button>
    </div>
  );
};

export default ProductFiltering;
