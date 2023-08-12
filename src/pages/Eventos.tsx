import { Link } from "react-router-dom"
import { Card } from "../components/Card"
import { Title } from "../components/Title"


export const Eventos = () => {
  return (
    <>
      <Title titulo="Vuelos" />
      <br />
    <div>
      <Link to="/personas">
      <Card titulo="Vuelo a Paris" price="$300"  img={{ src: "img/vuelo.png", alt: "vuelos" }}/>
      </Link>
    </div>
    </>
  )
}