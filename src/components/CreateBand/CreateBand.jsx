/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "./../../redux/actions/index";

export function validate(input) {
  const errors = {};

  if (input.name.length > 30 || input.origin.length > 30) {
    errors.name = "Nombre u Origen demasiado largo";
  }

  if (input.tickets < 0) {
    errors.tickets = "Los tickets deben ser un numero positivo";
  }

  return errors;
}

const CreateBand = () => {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: 0,
  });

  const [errors, setErrors] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: 0,
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });

    setErrors(
      validate({
        ...input,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(input);
    if (!Object.keys(errors).length) {
      dispatch(actions.createBands(input));
      setInput({
        name: "",
        origin: "",
        description: "",
        tickets: 0,
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          value={input.name}
          type="text"
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="origin">Origin: </label>
        <input
          name="origin"
          value={input.origin}
          type="text"
          onChange={handleChange}
        />
        {errors.origin && <p>{errors.origin}</p>}

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          value={input.description}
          onChange={handleChange}
        />

        <label htmlFor="tickets">Tickets: </label>
        <input
          name="tickets"
          value={input.tickets}
          type="number"
          onChange={handleChange}
        />
        {errors.tickets && <p>{errors.tickets}</p>}

        <button type="submit">Create Band</button>
      </form>
    </div>
  );
};

export default CreateBand;
