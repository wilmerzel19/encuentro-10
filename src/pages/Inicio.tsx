import { useEffect } from "react";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

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
      <Link to="/personas">
      <Card titulo="hotel de paris" price="$500" img={{ src: "img/hotel1.png", alt: "paris" }}/>
      </Link>
<br />
<Link to="/personas">
      <Card titulo="hotel de paris" price="$600"  img={{ src: "img/hotel2.png", alt: "paris" }}/>
      </Link>

    </div>
    </>
   
  );
};
