/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";

import Button from "./Button";

export default function Table() {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("json/personas.json")
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar el archivo JSON</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table mt-10">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Comentario</th>
            <th>Acciones</th>
           
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item:any) => {
              return (
                  <tr key={item.id}>
                      <td>
                          <div className="font-bold">{item.nombre}</div>
                      </td>
                      <td>
                          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                          {item.email}
                      </td>
                      <td>{item.comentario}</td>

                      <td>
                          <Button text="Editar" />
                          <Button text="Eliminar" />
                      </td>
                  </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
}
