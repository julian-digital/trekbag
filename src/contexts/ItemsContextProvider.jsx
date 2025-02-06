import { createContext } from "react";
import { initialItems } from "../lib/constants.js";
import { useState, useEffect } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };
      const newItems = [...items, newItem];
      setItems(newItems);
    },
    handleRemoveAllItems = () => {
      setItems([]);
    },
    handleResetToInitial = () => {
      setItems(initialItems);
    },
    handleMarkAllAsCompleted = () => {
      const newItems = items.map((item) => {
        return { ...item, packed: true };
      });
      setItems(newItems);
    },
    handleMarkAllAsIncompleted = () => {
      const newItems = items.map((item) => {
        return { ...item, packed: false };
      });
      setItems(newItems);
    },
    handleDeteleItem = (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    },
    handleToggleItem = (id) => {
      const newItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      setItems(newItems);
    };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsCompleted,
        handleMarkAllAsIncompleted,
        handleDeteleItem,
        handleToggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
