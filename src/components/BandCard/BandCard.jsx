/* 7️⃣ ***COMPONENTE BANDCARD*** 7️⃣

Implementar el componente BandCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar una banda específica.

IMPORTANTE
❗Este componente debe ser de funcional.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/
import "./bandCard.css";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../redux/actions/index";

const BandCard = (props) => {
  const dispatch = useDispatch();

  const handleDeleteBand = () => {
    dispatch(actions.deleteBands(props.id));
  };

  return (
    <div className="card">
      <button onClick={handleDeleteBand}>x</button>
      <Link to={`/band/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <img src={props.image} alt={props.name} />
      <p>FunctionDate: {props.functionDate}</p>
    </div>
  );
};

export default BandCard;
