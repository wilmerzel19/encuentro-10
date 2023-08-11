/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from "./Button";

export default function Table() {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("json/personas.json")
      .then((response) => response.json())
      .then((data) => {
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item: any) => (
            <tr key={item.id}>
              <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12"></div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>

                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
              </td>
              <td>
                {item.email}
                <br />
                <span className="badge badge-ghost badge-sm">{item.name}</span>
              </td>
              <td>{item.body}</td>

              <td>
                <Button text="Editar" />
                <Button text="Eliminar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
