const App = () => {
  return React.createElement("h1", {}, "Our First React page has rendered"); // hi es lo que queremos crear, {} es para los props (en este caso no hay) y el string es lo que va dentro del h1.
};
ReactDOM.render(React.createElement(App), document.getElementById("root")); // mediante .render() le decimos a React que cree App dentro del elemento con id 'root'.
