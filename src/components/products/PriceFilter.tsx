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
import { useAppDispatch } from "@/redux/features/hooks";
import { getFilterPriceValue } from "@/redux/features/product/productSlice";

const PriceFilter = () => {
  const dispatch = useAppDispatch();
  const handleFilterPrice = (value: string) => {
    dispatch(getFilterPriceValue(value));
  };
  return (
    <Select onValueChange={handleFilterPrice}>
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
