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
type SortingProps = {
  setSort: Dispatch<SetStateAction<string>>;
};

const Sorting = ({ setSort }: SortingProps) => {
  return (
    <Select onValueChange={setSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Default Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Default Sorting</SelectLabel>
          <SelectItem value="low">Price Ascending</SelectItem>
          <SelectItem value="high">Price Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sorting;
