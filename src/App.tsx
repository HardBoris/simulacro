import "./App.css";
import { Boton } from "./components/botones";
import useSound from "use-sound";
import urna from "./assets/urna.mpeg";
import otra from "./assets/urna_eletronica.mp3";
import toque from "./assets/button_tap.mpeg";
import { useState } from "react";
import { EuVoto } from "./components/EuVoto";
import foto from "./assets/orcinei.jpeg";

function App() {
  const [playSound] = useSound(urna);
  const [tap] = useSound(toque);
  const botones = ["branco", "corrige", "confirma"];
  const digitos = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"]];
  const [primero, setPrimero] = useState("");
  const [segundo, setSegundo] = useState("");
  const [pronto, setPronto] = useState(primero + segundo);

  const first = (n: string) => {
    tap();
    setPrimero(n);
  };

  const second = (n: string) => {
    tap();
    setSegundo(n);
  };

  const handleTecla = (a: string) => {
    if (primero === "") {
      first(a);
    } else if (segundo === "") {
      second(a);
    }
  };

  const clearThis = () => {
    tap();
    setPrimero("");
    setSegundo("");
  };

  const confirm = () => {
    playSound();
    clearThis();
  };

  return (
    <div className="App">
      <div className="urna">
        <div className="urna-display">
          <EuVoto a={primero} b={segundo} foto={foto} />
        </div>
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
                    <div
                      key={digito}
                      className="columnas"
                      onClick={() => handleTecla(digito)}
                    >
                      {digito}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="teclado-botonera">
              {botones.map((item, index) => (
                <Boton
                  key={index}
                  leyenda={item}
                  clase={item}
                  accion={
                    item === "confirma" ? () => confirm() : () => clearThis()
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
