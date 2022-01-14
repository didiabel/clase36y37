import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Context } from "../../store/context/context";

const Voley = () => {

  const {voley, guardar, setHora, ahora, setAhora} = useContext(Context)
    
     
    return ( 
        <div>
        {voley.map(cadaUno => (
            <div className="d-flex mt-5" key={cadaUno.id}>
            <img src={cadaUno.url_imagen} className="card-img-top " style={{width: '18rem'}} />
            <div className="card-body">
              <h5 className="card-title">{cadaUno.nombre}</h5>
              {cadaUno.horarios.map(hora => (
                <button onClick={() => setHora(cadaUno.nombre, hora.hora)} key={hora.id} className="btn border"> {hora.hora} </button>
              ))}
              <button onClick={()=> guardar(ahora)} className="btn btn-primary d-block mt-5">Reservar</button>
              <Toaster/>
            </div>
          </div>
        ))}
        </div>
     );
}
 
export default Voley;