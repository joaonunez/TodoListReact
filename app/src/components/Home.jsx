import React from "react";
export const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Gestión De Tareas</h1>
        <ul>
            <li><input type="text" placeholder="Ingresa Una Nueva Tarea"></input></li>
            <li>Make the bed</li>
            <li>Make the door</li>
            <li>Make the toy</li>
            <li>Walk the dog</li>
        </ul>
        <div>23 Tasks</div>
      </div>
    </>
  );
};
