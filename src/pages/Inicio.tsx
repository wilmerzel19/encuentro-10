import { useEffect } from "react";
import { Title } from "../components/Title";
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
      <br />

   
  
    <div>
      <Card titulo="hotel de paris" price="$500" img={{ src: "img/hotel1.png", alt: "paris" }}/>
<br />

      <Card titulo="hotel de paris" price="$600"  img={{ src: "img/hotel2.png", alt: "paris" }}/>

    </div>
    </>
   
  );
};
