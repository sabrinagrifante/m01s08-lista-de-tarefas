import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import ListItem from "./components/ListItem"

function App() {
  //criamos uma lista de tarefas, que será um array de objetos
  //o useState recebe como valor padrão o objeto dentro do array
  const [listaDeTarefas, setListaDeTarefas] = useState([
    { id: 1, texto: "Tarefa 01", finalizado: false },
  ]);

  function adicionarTarefa(tarefa) {
    
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto: tarefa,
      finalizado: false,
    };

    setListaDeTarefas([...listaDeTarefas, novaTarefa])
  }

  function removerTarefa(tarefa){

    // filtra a tarefa selecionada e assim remove a tarefa
    const novaLista = listaDeTarefas.filter(item => item.id != tarefa.id)

    setListaDeTarefas(novaLista)
  }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {listaDeTarefas.map((tarefa) => (
        <ListItem tarefa={tarefa} removerTarefa={removerTarefa}/>
        ))}
    </div>
  );
}

export default App;
