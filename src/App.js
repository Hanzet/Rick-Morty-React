import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga

  const reqApi = async () => {
    setLoading(true); // Establece el estado de carga a true antes de la solicitud
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setTimeout(() => {
      setCharacters(characterApi.results);
      setLoading(false); // Establece el estado de carga a false después de recibir los datos
    }, 1000); // Simula un retraso de 1 segundo
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {loading && <span className="loader"></span>} {/* Muestra el spinner si loading es true */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
