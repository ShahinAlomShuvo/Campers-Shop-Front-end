import { useAppDispatch } from "@/redux/features/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getSortingValue } from "@/redux/features/filter/filterSlice";

const Sorting = () => {
  const dispatch = useAppDispatch();
  const handleSorting = (value: string) => {
    dispatch(getSortingValue(value));
  };
  return (
    <Select onValueChange={handleSorting}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Default Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Default Sorting</SelectLabel>
          <SelectItem value="asc">Price Ascending</SelectItem>
          <SelectItem value="desc">Price Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sorting;
