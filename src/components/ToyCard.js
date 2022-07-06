import React from "react";

function ToyCard({ toyObject, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toyObject;

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteToy(toyObject));
  }

  function handleLikeClick() {
    const updateLikesObj = {
      likes: toyObject.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateLikesObj),
    })
      .then((res) => res.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleDeleteClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
