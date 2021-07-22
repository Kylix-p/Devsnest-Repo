import "./App.css";
import { useState } from "react";
import GetData from "./components/GetData";
import DisplayFood from "./components/DisplayFood";

function App() {
  const [foods, setFoods] = useState([]);
  const updateFood = (index, newFood) => {
    setFoods(
      foods.map((food, i) => (i === index ? { ...food, ...newFood } : food))
    );
  };

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  const removeFood = (index) => {
    setFoods(foods.filter((food, i) => i !== index));
  };
  return (
    <div className="App-container">
      <header>Calorie Tracker</header>
      <main>
        <GetData addFood={addFood} />
        <div className="food-list-container">
          {foods.length === 0 ? (
            <div className="no-items">Add Food Items here</div>
          ) : (
            foods.map((food, index) => (
              <DisplayFood
                key={index}
                index={index}
                food={food}
                updateFood={updateFood}
                removeFood={removeFood}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;