import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Margharita" description="Mozzarella cheese, basil, Tomato Base"/>
      <Pizza name="Veggie Hawaiian" description="Mozzarella Cheese, Pineapple, Veggie Ham, Tomato Base"/>
      <Pizza name="Veg Feast" description="Mozzarella Cheese, Red Onion, Sweetcorn, Peppers, Courgette, Pesto Drizzle, Tomato Base"/>
      <Pizza name="Fiorentina" description="Mozzarella Cheese, Parmesan, Spinach, Black Olives, Egg, Tomato Base"/>
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
