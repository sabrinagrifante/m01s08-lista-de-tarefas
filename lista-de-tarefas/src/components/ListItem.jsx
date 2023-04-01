import { useState } from "react";
import "./listItem.css"

//o componente terá dois botões: um para finalizar a tarefa e outro para remover uma tarefa

// função de listar os itens recebe "tarefa e removerTarefa" como props
function ListItem({ tarefa, removerTarefa }) {

    //através do useState, armazenamos o valor "se tarefa está finalizada ou não"
    const [finalizado, setFinalizado] = useState(tarefa.finalizado)

    //criamos a função para finalizar uma tarefa
    function finalizarTarefa(evento) {
        evento.preventDefault()
        //o valor booleano do estado atual é invertido quando o botão de finalizar tarefa for clicado
        setFinalizado(!finalizado)
    }

    //criamos a função para remover uma tarefa
    function handleRemoverTarefa(evento) {
        evento.preventDefault()
        removerTarefa(tarefa)
    }

    return (
        <div>
            {
                //renderização condicional, determina se uma tarefa está finalizada ou não, e renderiza o elemento correspondente
                //operador ternário
                //se "finalizado" for true, o código dentro do primeiro parênteses será executado, senão (falso) o código do segundo parênteses será executado
                finalizado ? (
                        <li key={tarefa.id} className={'list-item finalizado'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>FINALIZAR</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>REMOVER</button>
                    </li>
                ) : (
                        <li key={tarefa.id} className={'list-item'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>FINALIZAR</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>REMOVER</button>
                    </li>
                )
            }
        </div>

    );
}

export default ListItem;