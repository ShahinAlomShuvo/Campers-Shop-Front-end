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

const Sorting = () => {
  return (
    <Select>
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
