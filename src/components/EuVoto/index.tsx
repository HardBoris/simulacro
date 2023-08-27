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
          <div className={a + b !== "" ? (a && b ? "nombre" : "nada") : "nada"}>
            <p className="normal">nome: </p>
            <p className="titulo">
              {a + b !== ""
                ? a + b === "22"
                  ? "Orcinei"
                  : `Outro Candidato`
                : ""}
            </p>
          </div>
        </div>
        <div className="imagen">
          <div
            className={
              a + b !== ""
                ? a && b
                  ? a + b === "22"
                    ? "foto"
                    : "avatar"
                  : "nada"
                : "nada"
            }
          ></div>
        </div>
        <div className={a + b !== "" ? "instrucciones" : "nada"}>
          <p>Aperte a tecla:</p>
          <p>VERDE para confirmar o seu voto</p>
          <p>LARANJA para reiniciar o seu voto</p>
        </div>
      </div>
      <div className={a && b ? (a + b !== "22" ? "credito" : "nada") : "nada"}>
        Imagem de{" "}
        <a href="https://br.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_27470334.htm#query=avatar&position=7&from_view=search&track=sph">
          Freepik
        </a>
      </div>
      <div className={fim ? "fim" : "nada"}>FIM</div>
    </>
  );
};
