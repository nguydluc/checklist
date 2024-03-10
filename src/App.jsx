import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Footer from "./components/Footer";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleObject(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, prepared: !item.prepared } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <>
      <Header />
      <Main>
        <Form onAddItem={handleAddItem} />
        <CheckList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleObject={handleToggleObject}
          onClearList={handleClearList}
        />
      </Main>
      <Footer />
    </>
  );
}
