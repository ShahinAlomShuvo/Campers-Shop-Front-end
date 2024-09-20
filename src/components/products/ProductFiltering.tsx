import { useState } from "react";

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
    <div className="flex space-x-4 items-center justify-between py-6">
      {/* Category Filter */}
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more categories */}
      </select>

      {/* Price Filter */}
      <select
        className="border p-2 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="">Price Filter</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {/* Sorting */}
      <select
        className="border p-2 rounded"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Default sorting</option>
        <option value="price-asc">Price Ascending</option>
        <option value="price-desc">Price Descending</option>
      </select>

      {/* Clear Button */}
      <button
        onClick={clearFilters}
        className="p-2 border rounded bg-red-500 text-white"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFiltering;
