import React, { useState } from "react";

function ToyForm({ sendToyToApp }) {
  const [inputFieldName, setInputFieldName] = useState("");
  const [inputFieldImage, setInputFieldImage] = useState("");

  return (
    <div className="container">
      <form
        className="add-toy-form"
        onSubmit={(e) => {
          e.preventDefault();
          let newToy = {
            name: inputFieldName,
            image: inputFieldImage,
          };
          sendToyToApp(newToy);
        }}
      >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={inputFieldName}
          onChange={(e) => {
            setInputFieldName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={inputFieldImage}
          onChange={(e) => {
            setInputFieldImage(e.target.value);
          }}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
