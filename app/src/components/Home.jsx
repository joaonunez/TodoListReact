import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

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
                  setTodos(todos.concat(inputValue));
                  setInputValue("");
                }
              }}
            ></input>
          </li>
          {todos.map((t) => (
            <li>
              {t} <FontAwesomeIcon icon={faTrash} />
            </li>
          ))}
          
        </ul>
        <div>23 Tasks</div>
      </div>
    </>
  );
};
