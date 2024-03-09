import { useState } from "react";

const Form = () => {
  //onAddItem
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    //const newItem = { description, quantity, packed: false, id: Date.now() };
    //console.log(newItem);
    //onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="bg-brand-green w-full h-[30vh] md:h-[20vh] flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center py-3 fixed top-[10vh]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg text-brand-white">
        What do you need for Christmas?
      </h2>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6">
        <div className="flex gap-3 md:gap-6">
          <select
            className="px-5 py-3 rounded-3xl"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            className="px-5 py-3 rounded-3xl"
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="px-5 py-3 rounded-3xl bg-brand-yellow hover:bg-brand-white hover:text-brand-yellow text-brand-white font-semibold w-[100%] transition duration-300">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
