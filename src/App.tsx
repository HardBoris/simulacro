import "./App.css";
import { Boton } from "./components/botones";
import useSound from "use-sound";
import urna from "./assets/urna.mpeg";
import otra from "./assets/urna_eletronica.mp3";
import toque from "./assets/button_tap.mpeg";

function App() {
  const [playSound] = useSound(urna);
  const [tap] = useSound(toque);
  const botones = ["branco", "corrige", "confirma"];
  const digitos = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"]];
  /* const hola = (variable: any) => {
    const [play] = useSound(variable)
  }; */
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
                <Boton
                  key={index}
                  leyenda={item}
                  clase={item}
                  accion={item === "confirma" ? playSound : tap}
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
