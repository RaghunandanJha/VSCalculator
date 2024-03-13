
import { createContext, useState } from "react";
export const context=createContext();


const Provider=({children})=>{
 const [burden, setBurden]=useState();
 const [sec, setSec]=useState();
 const [alf, setAlf]=useState();
 const [rct, setRct]=useState();    
return <context.Provider value={{burden, setBurden, sec, setSec, alf, setAlf, rct, setRct }}>{children}</context.Provider>

};
export default Provider;