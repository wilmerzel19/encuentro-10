
import { Card } from "../components/Card"
import Table from "../components/Table"
import { Title } from "../components/Title"


export const Personas = () => {
  return (
    <div>
  <Title titulo="Posts" />
  <br />


  <div>
    <Card  titulo="id labore ex et quam laborum" price="Eliseo@gardner.biz" img={{ src: "img/posts.png", alt: "paris" }} />
    <br /> 
    <br /> 
     <Title titulo="Datos de los Posts" />
      <br />
    <Table />
    <br />
    <br />
    <br />
    </div>
    </div>
  )
}