import styled from "styled-components";
import { useState } from "react";
import { FAKEPARK } from "../../../../../fakeData/fakePark";
import PrimaryButton from "../../../../reusable/buttons/PrimaryButton";
import Car from "./Car";
import ToggleButton from "../../../../reusable/buttons/ToggleButton";
import { useContext } from "react";
import MainContext from "../../../../../context/MainContext";

type Props = {};

export default function CarList({}: Props) {
  //state
  const [cars, setCars] = useState(FAKEPARK);
  const { handleAddCartoSelection, isCarSelected } = useContext(MainContext);

  const [inputValue, setInputValue] = useState("");

  //comportement

  const handleSubmit = (e) => {
    e.preventDefault();

    const copyCars = [...cars];
    console.log("copyCars", copyCars);
    const updatedCars = copyCars.filter((car) =>
      car.modele.toLowerCase().includes(inputValue.toLowerCase())
    );
    setCars(updatedCars);
    addFilter(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addFilter = (filter) => {
    const newFilter = [...filter, filter];
    setFilter(newFilter);
  };

  const resetFilter = () => {
    setCars(FAKEPARK);
    setInputValue("");
  };

  //affichage
  return (
    <CarListStyled>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      <div className="filter">
        <span className="results">
          {cars.length}{" "}
          {cars.length === 1 ? <span>Résultat</span> : <span>Résultats</span>}
        </span>
        <p onClick={resetFilter}>Effacer le filtre</p>
      </div>
      {!cars.length && <p>Aucun résultat pour '{inputValue}'</p>}

      {cars.map((car) => {
        return (
          <Car {...car} key={car.id}>
            <ToggleButton
              isChecked={isCarSelected(car.id)}
              onClick={() => handleAddCartoSelection(car)}
            />
            <PrimaryButton label="Voir cette voiture" onClick={() => {}} />
          </Car>
        );
      })}
    </CarListStyled>
  );
}
const CarListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  width: 100%;
  grid-gap: 15px;
  padding: 0px 30px 170px 30px;
`;
