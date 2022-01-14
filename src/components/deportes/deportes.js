import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/context/context";
import './deportes.css'

const Deportes = () => {
    
    const {deportes} = useContext(Context);
    
    return ( 
        <div className="d-flex justify-content-around mt-5 " style={{width: 'auto'}}>
        {deportes.map(cadaUno => (
        <div className="card text-center" key={cadaUno.id} style={{width: '18rem'}}>
        <img src={cadaUno.url_imagen} className="card-img-top imagenesCards img-fluid img-thumbnail" alt="hh"/>
        <div className="card-body">
          <h5 className="card-title">{cadaUno.deporte}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`/${cadaUno.deporte}`} className="btn btn-primary">Ir {cadaUno.deporte}</Link>
        </div>
      </div>
    ))
    } 
    </div>
    );
}
 
export default Deportes;