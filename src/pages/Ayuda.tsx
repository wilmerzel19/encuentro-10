
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Title } from '../components/Title'

export const Ayuda = () => {
  return (
    <>
      <Title titulo="Transportes" />

      <br />
      <Link to="/personas">
      <Card  titulo="Transporte" price="$20" img={{ src: "img/transporte.png", alt: "paris" }} />
      </Link>
      <br />

    </>
  )
}