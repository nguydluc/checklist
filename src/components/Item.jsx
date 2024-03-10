const Item = ({ item, onDeleteItem, onToggleObject }) => {
  return (
    <li className="text-brand-green text-center font-semibold">
      <input
        className="mr-3 h-4 w-4 accent-brand-red"
        type="checkbox"
        value={item.prepared}
        onChange={() => {
          onToggleObject(item.id);
        }}
      />
      <span
        className="mr-3"
        style={item.prepared ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
