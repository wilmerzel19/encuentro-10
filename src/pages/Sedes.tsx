import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Title } from '../components/Title'

export const Sedes = () => {
  return (
    <>
      <Title titulo="Restaurantes" />
      <br />
      
      <Link to="/personas">
      <Card  titulo="Restaurante" price="$50" img={{ src: "img/restaurante.png", alt: "paris" }} />
      </Link>
      <br />

    </>
  )
}