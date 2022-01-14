import { useContext, useState } from "react/cjs/react.development";
import { Context } from "../../store/context/context";
import HorariosTenis from "./HorariosTenis/HorariosTenis";
import toast, { Toaster } from 'react-hot-toast';


const Tenis = () => {
  
    const {tenis, temporal, setTemporal, ahora, setAhora, guardar, setHora} = useContext(Context)

    
    
    return ( 
    <>
    {tenis.map(cadaCancha => (
        <div className="d-flex mt-5" key={cadaCancha.id}>
        <img src={cadaCancha.url_imagen} className="card-img-top " style={{width: '18rem'}} />
        <div className="card-body">
          <h5 className="card-title">{cadaCancha.nombre}</h5>
          {cadaCancha.horarios.map(hora => (
            <button onClick={() => setHora(cadaCancha.nombre, hora.hora)} key={hora.id} className="btn btn-outline border"> {hora.hora} </button>
          ))}
          <button onClick={()=> guardar(ahora)} className="btn btn-primary d-block mt-5">Reservar</button>
          <Toaster/>
        </div>
      </div>
    ))}

    </>
     );
}
 
export default Tenis;