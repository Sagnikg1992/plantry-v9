
import React, { useState } from "react";

export default function App() {
  const [meal, setMeal] = useState("");

  const meals = ["Pasta", "Biryani", "Salad", "Paneer Tikka"];

  const suggestMeal = () => {
    const random = meals[Math.floor(Math.random() * meals.length)];
    setMeal(random);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Daily Meal Ideas</h1>
      <button onClick={suggestMeal}>Suggest a Meal</button>
      {meal && <p style={{ marginTop: 20 }}>Try: <strong>{meal}</strong></p>}
    </div>
  );
}
