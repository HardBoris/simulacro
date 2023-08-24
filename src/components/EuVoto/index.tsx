import { useState } from "react";
import "./EuVoto.css";

interface EuVotoProps {
  a: string;
  b: string;
  foto: string;
  fim: boolean;
}

export const EuVoto = ({ a, b, foto, fim }: EuVotoProps) => {
  return (
    <>
      <div className={fim ? "nada" : "inicial"}>
        <div className="datos">
          <p className="normal">Seu voto para:</p>
          <p className="titulo">Conselheiro Tutelar</p>
          <div className="numeros">
            <div className="envelope">
              <p className="normal">número:</p>
            </div>
            <div className="cuadro">{a}</div>
            <div className="cuadro">{b}</div>
          </div>
          <div className="nombre">
            <p className="titulo">
              <div className="normal">{"nome:"}</div>{" "}
              {a + b !== ""
                ? a + b === "22"
                  ? "Orcinei"
                  : `Outro Candidato`
                : ""}
            </p>
          </div>
        </div>
        <div className="imagen">
          <div className={a + b === "22" ? "foto" : "nada"}>
            <img src={foto} alt="foto del candidato" />
          </div>
        </div>
        <div className={a + b !== "" ? "instrucciones" : "nada"}>
          <p>Aperte a tecla:</p>
          <p>VERDE para confirmar o seu voto</p>
          <p>LARANJA para reiniciar o seu voto</p>
        </div>
      </div>
      <div className={fim ? "fim" : "nada"}>FIM</div>
    </>
  );
};
