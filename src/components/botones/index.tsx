import { PlayFunction } from "use-sound/dist/types";

interface BotonProps {
  leyenda: string;
  clase: string;
  accion: PlayFunction;
}
export const Boton = ({ leyenda, clase, accion }: BotonProps) => {
  return (
    <div className={clase} role="button" onClick={() => accion()}>
      {leyenda}
    </div>
  );
};
