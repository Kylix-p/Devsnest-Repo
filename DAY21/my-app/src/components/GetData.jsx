import { useState } from "react";

function GetData({ addFood }) {
  const [food, setFood] = useState("");
  const [calorie, setCalorie] = useState("");
  return (
    <form
      className="input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        addFood({ food, calorie });
        setFood("");
        setCalorie("");
      }}
    >
      <input
        type="text"
        id="food-wrapper"
        placeholder="Food"
        onChange={(e) => {
          setFood(e.target.value);
        }}
        value={food}
        required
      />
      <input
        type="number"
        id="calorie-wrapper"
        placeholder="Calories"
        onChange={(e) => {
          setCalorie(e.target.value);
        }}
        value={calorie}
        required
      />
      <button id="btn-submit" type="submit">
        <img src="/images/plus.svg" alt="" width="20px" height="20px" />
      </button>
    </form>
  );
}

export default GetData;