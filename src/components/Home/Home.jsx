/*5️⃣ ***COMPONENTE HOME*** 5️⃣

Implementar el componente Home. Este deberá renderizar una lista de eventos (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <BandCard />.

IMPORTANTE
❗Este componente debe ser de clase.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import img from "../../img-cp2/main-image-cp2.jpg";
import BandCard from "../BandCard/BandCard";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllBands();
  }

  render() {
    return (
      <div className="home">
        <h1>Henry Palooza</h1>
        <img src={img} alt="henry-palooza-logo" />
        <h3>Bandas</h3>
        <h4>Checkpoint M2</h4>

        {this.props.bands &&
          this.props.bands.map((banda) => {
            return (
              <BandCard
                id={banda.id}
                name={banda.name}
                image={banda.image}
                functionDate={banda.functionDate}
              />
            );
          })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    bands: state.bands,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllBands: () => dispatch(actions.getAllBands()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
