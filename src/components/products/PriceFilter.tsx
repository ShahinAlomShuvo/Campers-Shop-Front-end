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

type PriceFilterProps = {
  setPrice: Dispatch<SetStateAction<string>>;
};
const PriceFilter = ({ setPrice }: PriceFilterProps) => {
  return (
    <Select onValueChange={setPrice}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Price Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price Filter</SelectLabel>
          <SelectItem value="100"> 0-100 </SelectItem>
          <SelectItem value="200">100-200</SelectItem>
          <SelectItem value="300">200-300</SelectItem>
          <SelectItem value="400">300-400</SelectItem>
          <SelectItem value="500">400-500</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceFilter;
