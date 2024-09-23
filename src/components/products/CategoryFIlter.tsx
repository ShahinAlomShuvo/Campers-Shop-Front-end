import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppDispatch } from "@/redux/features/hooks";
import { getCategoryValue } from "@/redux/features/filter/filterSlice";

type TCategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};
const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}: TCategoryFilterProps) => {
  const dispatch = useAppDispatch();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    dispatch(getCategoryValue(value));
  };

  return (
    <Select value={selectedCategory} onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="tents">Tents</SelectItem>
          <SelectItem value="shelter">Shelter</SelectItem>
          <SelectItem value="camp-cooking">Camp Cooking</SelectItem>
          <SelectItem value="dining">Dining</SelectItem>
          <SelectItem value="backpacks">Backpacks</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
