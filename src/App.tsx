import "./App.css";

function App() {
  const botones = ["branco", "cancela", "confirma"];
  const digitos = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"]];
  return (
    <div className="App">
      <div className="urna">
        <div className="urna-display"></div>
        <div className="urna-teclas">
          <div className="urna-teclas-logo">
            <h1>JUSTIÇA</h1>
            <h1>ELEITORAL</h1>
          </div>
          <div className="urna-teclado">
            <div className="teclado-digitos">
              {digitos.map((item, index) => (
                <div key={index} className="filas">
                  {item.map((digito) => (
                    <div key={digito} className="columnas">
                      {digito}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="teclado-botonera">
              {botones.map((item, index) => (
                <div key={index} className={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
