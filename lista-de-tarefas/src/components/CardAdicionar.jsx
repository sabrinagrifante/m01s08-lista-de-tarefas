import { useState } from "react";
import "./cardAdicionar.css"

function CardAdicionar({adicionarTarefa}) {
  const [tarefa, setTarefa] = useState("");

  const handleAdicionar = (evento) => {
    evento.preventDefault();
    if (tarefa != "") {
      adicionarTarefa(tarefa)
      setTarefa("")
    }
  };

  return (
    <div>
      <input
        className="campo_input"
        placeholder="Adicionar tarefa"
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button className="botao_adicionar" onClick={handleAdicionar}>ADICIONAR TAREFA</button>
    </div>
  );
}
export default CardAdicionar;
