const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Restaurant Name"),
    React.createElement(Pizza, {
      name: "Pizza Name 1",
      description: "Pizza 1 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza Name 2",
      description: "Pizza 2 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza Name 3",
      description: "Pizza 3 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza Name 4",
      description: "Pizza 4 description",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
