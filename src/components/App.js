import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toyArray, setToyArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => {
        setToyArray(data);
      });
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function getToyFromToyForm(toyFromToyForm) {
    setToyArray([...toyArray, toyFromToyForm]);

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyFromToyForm),
    })
      .then((res) => res.json())
      .then(console.log);
  }

  function handleDeleteToy(toyToDelete) {
    const updatedToys = toyArray.filter((toy) => toy.id !== toyToDelete.id);
    setToyArray(updatedToys);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toyArray.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToyArray(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm sendToyToApp={getToyFromToyForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        allToys={toyArray}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
