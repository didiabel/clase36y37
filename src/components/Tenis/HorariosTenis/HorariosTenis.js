import { useContext } from "react/cjs/react.development";
import { Context } from "../../../store/context/context";


const HorariosTenis = () => {
    const {tenis} = useContext(Context)
    return ( 
        <>
        {tenis.map(cadaCancha => (
            cadaCancha.horarios.map(hora => (
                <button key={hora.id} className="btn border"> {hora.hora} </button>
            ))
        ))}
        </>
     );
}
 
export default HorariosTenis;
