import React, { useCallback, useContext, useMemo, useState } from "react";

const ItemContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useApplicationContext = () => useContext(ItemContext);

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const handleAddItem = useCallback((newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  }, []);

  const handleDeleteItem = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const handleToggleObject = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, prepared: !item.prepared } : item
      )
    );
  }, []);

  const handleClearList = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }, []);

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

  const theValues = useMemo(
    () => ({
      handleAddItem,
      items,
      handleDeleteItem,
      handleToggleObject,
      handleClearList,
      sortBy,
      setSortBy,
      sortedItems,
    }),
    [
      handleAddItem,
      items,
      handleDeleteItem,
      handleToggleObject,
      handleClearList,
      sortBy,
      setSortBy,
      sortedItems,
    ]
  );

  return (
    <ItemContext.Provider value={theValues}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;
