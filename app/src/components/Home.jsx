import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import tareas from "../scripts/tareas";
export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareasArray, setTareas] = useState(tareas);
  const borrarTarea = (index) =>{
    const filtroTareas = tareasArray.filter((_,i)=>i !== index)
    setTareas(filtroTareas)
  }

  return (
    <>
      <div className="container">
        <h1>Gestión De Tareas</h1>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Ingresa Una Nueva Tarea"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyPress={(e) => {
                console.log(e.key);
                if (e.key === "Enter") {
                  setTareas(tareasArray.concat(inputValue));
                  setInputValue("");
                }
              }}
            ></input>
          </li>
          {tareasArray.map((tarea,index) => (
            <li key={index}>
              {tarea} <FontAwesomeIcon icon={faTrash} onClick={()=>borrarTarea(index)} />
            </li>
          
          ))}
          
        </ul>
        <div>{tareasArray.length} Tareas.</div>
      </div>
    </>
  );
};
