import React, { useState } from 'react';

const Foro = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [publicaciones, setPublicaciones] = useState([]);
  const [respuestas, setRespuestas] = useState({});

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevaPublicacion = { id: Date.now(), titulo, texto };
    setPublicaciones([...publicaciones, nuevaPublicacion]);
    setTitulo('');
    setTexto('');
  };

  const manejarRespuesta = (id, respuestaTexto) => {
    setRespuestas({
      ...respuestas,
      [id]: [...(respuestas[id] || []), respuestaTexto],
    });
  };

  const publicacionesFiltradas = publicaciones.filter(pub =>
    pub.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const estilosContainer = {
    display: 'flex',
    height: '100vh',
  };

  const estilosBarraBusqueda = {
    width: '30%',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRight: '1px solid #ccc',
  };

  const estilosPublicaciones = {
    width: '70%',
    padding: '20px',
  };

  const estilosInput = {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const estilosButton = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const estilosPublicacion = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '2px solid black', 
  };

  const estilosRespuesta = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    margin: '5px 0 5px 20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const estilosFormularioRespuesta = {
    marginTop: '15px', 
  };

  const estilosBotonRespuesta = {
    display: 'inline-block',
    padding: '5px 10px', 
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <div style={estilosContainer}>
      {/* Busqueda */}
      <div style={estilosBarraBusqueda}>
        <h1 style={{ textAlign: 'center' }}>Buscar Publicaciones</h1>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={estilosInput}
        />
      </div>

      {/* Publcaciones */}
      <div style={estilosPublicaciones}>
        <h1 style={{ textAlign: 'center' }}>Foro de Excursiones</h1>
        <form onSubmit={manejarEnvio}>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título de la publicación"
            required
            style={estilosInput}
          />
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe tu publicación aquí..."
            required
            style={{ ...estilosInput, height: '100px' }}
          />
          <button type="submit" style={estilosButton}>
            Publicar
          </button>
        </form>

        <div>
          {publicacionesFiltradas.map((pub) => (
            <div key={pub.id} style={estilosPublicacion}>
              <h3 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{pub.titulo}</h3>
              <p>{pub.texto}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const respuestaTexto = e.target.elements.respuesta.value;
                  manejarRespuesta(pub.id, respuestaTexto);
                  e.target.reset();
                }}
                style={estilosFormularioRespuesta}
              >
                <input
                  type="text"
                  name="respuesta"
                  placeholder="Escribe tu respuesta..."
                  required
                  style={estilosInput}
                />
                <button type="submit" style={estilosBotonRespuesta}>
                  Responder
                </button>
              </form>
              {respuestas[pub.id] && respuestas[pub.id].map((respuesta, index) => (
                <div key={index} style={estilosRespuesta}>
                  <p>{respuesta}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foro;