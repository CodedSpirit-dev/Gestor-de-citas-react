import React from "react";
import { useEffect } from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  //  useEffect(() => {
  //    if(pacientes.length > 0)
  //    console.log("Nuevo paciente")
  //  }, [pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="mt-5 md:mt-0 font-black text-3xl text-center">
            Listado Pacientes
          </h2>
          <p className="text-lg mt-2 text-center mb-3">
            Dale seguimiento a tus {"  "}
            <span className="text-indigo-700 font-extrabold">Pacientes</span>
          </p>

          {pacientes.map( paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
          ))}
        </>


        
      ) : (
        <>
          <h2 className="mt-5 md:mt-0 font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mt-2 text-center mb-3">
            Comienza agregando pacientes {"  "}
            <span className="text-indigo-700 font-extrabold">
              y aparecerán aquí
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
