import { useState } from "react";
import Item from "./Item";

const CheckList = ({ items, onDeleteItem, onToggleObject, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      // eslint-disable-next-line react/prop-types
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "prepared")
    sortedItems = items
      // eslint-disable-next-line react/prop-types
      .slice()
      .sort((a, b) => Number(a.prepared) - Number(b.prepared));

  return (
    <div className="mx-auto px-[10%] py-[5%] w-[70%] h-[50vh] md:h-[60vh] max-w-screen-lg fixed top-[40vh] md:top-[30vh] overflow-auto left-0 right-0">
      <ul className="grid md:grid-cols-3 gap-3 mb-[10%]">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleObject={onToggleObject}
          />
        ))}
      </ul>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <select
          className="px-5 py-3 rounded-3xl font-semibold bg-brand-yellow text-brand-white"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="prepared">Sort by prepared status</option>
        </select>
        <button
          onClick={onClearList}
          className="px-5 py-3 hover:text-brand-red duration-300"
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

export default CheckList;
