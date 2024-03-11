import { useApplicationContext } from "./providers/ItemProvider";

const Item = ({ item }) => {
  const { handleDeleteItem, handleToggleObject } = useApplicationContext();
  return (
    <li className="text-brand-green text-center font-semibold">
      <input
        className="mr-3 h-4 w-4 accent-brand-red"
        type="checkbox"
        value={item.prepared}
        onChange={() => {
          handleToggleObject(item.id);
        }}
      />
      <span
        className="mr-3"
        style={item.prepared ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
