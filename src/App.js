const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Veggie Hawaiian",
      description: "Mozzarella Cheese, Pineapple, Veggie Ham, Tomato Base",
    }),
    React.createElement(Pizza, {
      name: "Veg Feast",
      description:
        "Mozzarella Cheese, Red Onion, Sweetcorn, Peppers, Courgette, Pesto Drizzle, Tomato Base",
    }),
    React.createElement(Pizza, {
      name: "Fiorentina",
      description:
        "Mozzarella Cheese, Parmesan, Spinach, Black Olives, Egg, Tomato Base",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
