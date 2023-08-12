import { useEffect, useState } from "react";

import Button from "./Button";

interface Persona {
  id: number;
  nombre: string;
  email: string;
  comentario: string;
}
export default function Table() {
  const [jsonData, setJsonData] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("Api/personas.json")
      .then((response) => response.json())
      .then((data:Persona[]) => {
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
      <table className="table-zebra min-w-full divide-y divide-gray-500 ">
        <thead>
          <tr>
            <th className="min-w-full divide-y divide-gray-500 ">Name</th>
            <th>Email</th>
            <th>Comentario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="font-bold min-w-full divide-y divide-gray-500 " >{item.nombre}</div>
                </td>
                <td className="min-w-full divide-y divide-gray-500 ">{item.email}</td>
                <td>{item.comentario}</td>

                <td>
                  <Button class="bg-red-500" text="Editar" />
                  <Button class= 'bg-cyan-500' text="Eliminar" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
