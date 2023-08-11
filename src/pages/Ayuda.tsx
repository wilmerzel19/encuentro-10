
import { Card } from '../components/Card'
import { Title } from '../components/Title'

export const Ayuda = () => {
  return (
    <>
      <Title titulo="Transportes" />

      <br />
      <Card  titulo="Transporte" price="$20" img={{ src: "img/transporte.png", alt: "paris" }} />
      <br />

    </>
  )
}