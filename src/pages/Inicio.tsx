import { useEffect } from "react";
import { Title } from "../components/Title";
import { Imagen } from "../components/Imagen";
import { Card } from "../components/Card";

export const Inicio = () => {
  useEffect(() => {
    void fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <>
 
      <Title titulo="Hoteles" />
      <br />

      <Imagen />
      <br />  

   
  
    <div>
      <Card />
<br />
<br />

    </div>
    </>
   
  );
};
