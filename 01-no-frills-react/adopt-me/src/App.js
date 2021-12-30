const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),

  ])
}
const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement('h1', {id: 'my-brand'}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: "Bora",
        animal: "Dog",
        breed: "Puli"
      }),
      React.createElement(Pet, {
        name: "Amigo",
        animal: "Dog",
        breed: "Chinese Crested"
      }),
      React.createElement(Pet, {
        name: "Eszter",
        animal: "Human",
        breed: "Magyar"
      })
    ]
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))