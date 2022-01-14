import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const Context = createContext(null)


const UserProvider = ({children}) => {

    const [deportes, setDeportes] = useState([])
    const [voley, setVoley] = useState([])
    const [futbol, setFutbol] = useState([])
    const [tenis, setTenis] = useState([])
    const [temporal, setTemporal] = useState('')
    const [ahora, setAhora] = useState([])


    useEffect(()=>{
        axios.get('https://apipdtc.herokuapp.com/deportes')
        .then( (deportesinfo)=> {
            setDeportes(deportesinfo.data)
        })
        axios.get('https://apipdtc.herokuapp.com/voley')
        .then( (voleyinfo)=> {
            setVoley(voleyinfo.data)
        })

        axios.get('https://apipdtc.herokuapp.com/futbol')
        .then( (futbolinfo)=> {
            setFutbol(futbolinfo.data)
        })
        axios.get('https://apipdtc.herokuapp.com/tenis')
        .then( (tenisinfo)=> {
            setTenis(tenisinfo.data)
        })
    },[])
    const setHora = (id, hora) =>{
        let nombre = `Cancha: ${id} Hora: ${hora}`
        setTemporal(nombre)
      }
    const guardar = (ahora)=>{
        if(temporal===''){
            return
        }
        setAhora([temporal, ...ahora])
        setTemporal('')
        localStorage.setItem('reservas', JSON.stringify(ahora))
        toast.success('Successfully Saved!')
      }
    return ( 
        <Context.Provider value={{deportes, voley, futbol, tenis, temporal, setTemporal, guardar, ahora, setAhora, setHora}}>
        {children}
      </Context.Provider>
     );
};
 
export default UserProvider;