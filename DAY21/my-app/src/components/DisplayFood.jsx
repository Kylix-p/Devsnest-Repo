import { useState } from "react";

function DisplayFood({ index, food, updateFood, removeFood }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="food-wrapper">
      <input
        type="text"
        required
        value={food.food}
        onChange={(e) => updateFood(index, { food: e.target.value })}
        disabled={isEdit ? "" : "disabled"}
      />
      <input
        type="number"
        required
        value={food.calorie}
        onChange={(e) => updateFood(index, { calorie: e.target.value })}
        disabled={isEdit ? "" : "disabled"}
      />
      <div className="btn-modify">
        <button id="btn-edit-food" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Done" : "Edit"}
        </button>
        <button id="btn-delete-food" onClick={() => removeFood(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DisplayFood;