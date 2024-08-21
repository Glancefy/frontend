import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DatePickerWithRange } from "../ui/daterange-picker";
import { Input } from "../ui/input";

function ArticleListOptions() {
  const [sortBy, setSortBy] = useState("date");
  const handleSortByDate = () => {
    setSortBy("date");
  };

  const handleSortByReports = () => {
    setSortBy("reports");
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <Menubar className="flex justify-center gap-4">
        <MenubarMenu>
          <MenubarTrigger>Sort</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleSortByDate}>
              date
              {sortBy === "date" && <MenubarShortcut>✔</MenubarShortcut>}
            </MenubarItem>
            <MenubarItem onClick={handleSortByReports}>
              reports
              {sortBy === "reports" && <MenubarShortcut>✔</MenubarShortcut>}
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Filter</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Rising</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <DatePickerWithRange />
      </Menubar>
      <Input
        placeholder="Search article"
        // placeholder center, focus transition border, animate focus, animate placeholder opacity
        className="text-center focus-visible:ring-2 focus-visible:ring-blue-500
        border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-none focus-visible:border-transparent focus-visible:transition-colors focus-visible:duration-150
        focus-visible:placeholder-opacity-0 placeholder-opacity-50"
      />
    </div>
  );
}

export default ArticleListOptions;
