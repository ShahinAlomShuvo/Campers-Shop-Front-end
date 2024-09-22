import { FormEvent, useState } from "react";
import CategoryFilter from "./CategoryFIlter";
import PriceFilter from "./PriceFilter";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Sorting from "./Sorting";
import { useAppDispatch } from "@/redux/features/hooks";
import {
  clearAllFilters,
  getSearchValue,
} from "@/redux/features/filter/filterSlice";

const ProductFiltering = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getSearchValue(searchTerm));
  };

  // Function to clear all filters
  const clearFilters = () => {
    dispatch(clearAllFilters());
  };

  return (
    <div className="flex space-x-4 items-center justify-between p-10 border rounded shadow-lg my-14">
      {/* Category Filter */}
      <CategoryFilter />

      {/* Price Filter */}
      <PriceFilter />

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
      <Sorting />

      {/* Clear Button */}
      <Button onClick={clearFilters} className=" bg-red-500 text-white">
        Clear Filters
      </Button>
    </div>
  );
};

export default ProductFiltering;
