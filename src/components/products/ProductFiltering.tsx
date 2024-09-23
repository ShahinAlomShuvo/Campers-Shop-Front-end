import { FormEvent, useState } from "react";
import PriceFilter from "./PriceFilter";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Sorting from "./Sorting";
import { useAppDispatch } from "@/redux/features/hooks";
import {
  clearAllFilters,
  getSearchValue,
} from "@/redux/features/filter/filterSlice";
import CategoryFilter from "./CategoryFIlter";

const ProductFiltering = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedSorting, setSelectedSorting] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getSearchValue(searchTerm));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedPrice("");
    setSelectedSorting("");

    dispatch(clearAllFilters());
  };

  return (
    <div className="flex space-x-4 items-center justify-between p-10 border rounded shadow-lg my-14">
      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Price Filter */}
      <PriceFilter
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />

      {/* Search Filter */}
      <div>
        <form onSubmit={handleSearch} className="flex space-x-4 items-center">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search products"
          />
          <Button className="bg-[#c19d60]" type="submit">
            Search
          </Button>
        </form>
      </div>

      {/* Sorting */}
      <Sorting
        selectedSorting={selectedSorting}
        setSelectedSorting={setSelectedSorting}
      />

      {/* Clear Button */}
      <Button onClick={clearFilters} className="bg-red-500 text-white">
        Clear Filters
      </Button>
    </div>
  );
};

export default ProductFiltering;
