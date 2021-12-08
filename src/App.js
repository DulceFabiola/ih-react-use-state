//IMPORTACIONES
import "./App.css";
//establecer la importacion de Hook
//destructuracion de objetos
//React.useState
import React, { useState } from "react";

function App() {
  // 1. HOOKS - ESTADO LOCAL (USESTATE)
  // ES LA GESTIÓN DE DATOS DENTRO DEL COMPONENTE
  // const [valor, fxValor] = useState([ESTADO INICIAL])

  //A.Utilizamos para definir un nuevo comentario del formulario
  const [comentario, setComentario] = useState({
    title: "",
    description: "",
  });

  // B. DEFINIR EL LISTADO DE TODOS LOS COMENTARIOS DE LA APLICACIÓN
  //el valor inicial es un array vacio
  const [listadoComentarios, setListadoComentarios] = useState([]);
  //CRUD
  //CREAR
  const agregarComentario = (e) => {
    // EVITA LA RECARGA DE PÁGINA POR DEFECTO DEL SITIO CUANDO SE EJECUTA UN MÉTODO ESPECÍFICO

    //evitamos comportamiento por default
    e.preventDefault();

    //una vez que se envia la data al crear un comentario, que se guarde en el array de comentarios
    //para ello ocupamos la funcion que nos permite modificar ese listado
    //setListadoComentarios

    setListadoComentarios([
      //recordar clonar la data y agregamos el nuevo elemento creado
      ...listadoComentarios,
      comentario,
    ]);

    //una vez enviado, que se limpie el input
    //la input en su value, tiene anclado el estado local y con la funcion setComentario, podemos limpiarlo
    setComentario({
      title: "",
      description: "",
    });
  };

  //LEER
  //MODIFICAR
  //BORRAR
  // 2. FUNCIONES DEL COMPONENTE
  const generarMensaje = () => {
    return console.log("hola soy un hook");
  };

  const capturarDatos = (e) => {
    console.log(e);
    console.log(e.target.value); // ESTE ES EL VALOR DEL CAMPO DE TEXTO

    // FUNCIÓN DEL HOOK VA A REEMPLAZAR COMPLETAMENTE EL VALOR
    // DEL ESTADO LOCAL DE "COMENTARIO"
    // LA REGLA ES: SIEMPRE QUE MANIPULES USA EL MISMO TIPO DE DATO

    //usar el hook para capturar los datos
    return setComentario({
      //clonamos la data existente
      ...comentario,
      //mandamos en el input con x name lo que capture en su value
      //title:lo que escriba el usuario
      //description:otro texto random
      //el name lo definimos en el input
      [e.target.name]: e.target.value,
    });
  };
  // 3. RETORNO
  return (
    <>
      <button onClick={() => generarMensaje()}>Crear mensaje</button>
      <hr />
      <h2>Crea tu comentario</h2>
      <form
        onSubmit={(event) => {
          agregarComentario(event);
        }}
      >
        <h3>Escribe un título</h3>
        <input
          name="title"
          //valor del formulario esta conectado con el estado local

          value={comentario.title}
          onChange={(event) => capturarDatos(event)}
        />
        <h3>Escribe una descripción</h3>
        <input
          name="description"
          value={comentario.description}
          onChange={(event) => capturarDatos(event)}
        />
        <br />
        <br />
        <button>Crear comentario</button>

        <hr />
        <h2>Listado de Comentarios</h2>
        {/* Al ser un array, hacemos un map para mostrar cada elemento */}

        {listadoComentarios.map((elem) => {
          return (
            <>
              <h4>{elem.title}</h4>
              <p>{elem.description}</p>
            </>
          );
        })}
      </form>
    </>
  );
}

export default App;
