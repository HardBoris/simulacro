import "./EuVoto.css";

interface EuVotoProps {
  a: string;
  b: string;
  foto: string;
}

export const EuVoto = ({ a, b, foto }: EuVotoProps) => {
  return (
    <div className="inicial">
      <div className="datos">
        <p className="normal">Meu voto para:</p>
        <p className="titulo">Conselheiro Tutelar</p>
        <div className="numeros">
          <div className="envelope">
            <p className="normal">numero:</p>
          </div>
          <div className="cuadro">{a}</div>
          <div className="cuadro">{b}</div>
        </div>
        <div className={a + b === "22" ? "nombre" : "nada"}>
          <p className="titulo">Orcinei Lima Carioca</p>
        </div>
      </div>
      <div className="imagen">
        <div className={a + b === "22" ? "foto" : "nada"}>
          <img src={foto} alt="foto del candidato" />
        </div>
      </div>
    </div>
  );
};
