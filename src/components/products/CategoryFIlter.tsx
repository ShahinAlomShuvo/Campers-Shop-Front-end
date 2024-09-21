import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type CategoryFilterProps = {
  setCategory: Dispatch<SetStateAction<string>>;
};

const CategoryFilter = ({ setCategory }: CategoryFilterProps) => {
  return (
    <Select onValueChange={setCategory}>
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
