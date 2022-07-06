import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ allToys, onDeleteToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {allToys.map((eachToy) => {
        return (
          <ToyCard
            key={`Toy-${eachToy.id}`}
            toyObject={eachToy}
            onDeleteToy={onDeleteToy}
            onUpdateToy={onUpdateToy}
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;
