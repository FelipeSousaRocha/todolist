import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem/index";

function App() {
  //Estado chamado list
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Jogar lixo fora",
      done: false
    },
    {
      id: 2,
      name: "Comprar pao",
      done: true
    },
  ]); //Um Array te Item

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="m-auto max-w-4xl p-2.5">
        <h1 className="m-0 p-0 text-white text-center border-b border-solid border-purple-neon pb-5 font-bold text-3xl mb-2.5">
        Lista de Tarefas
        </h1>

        {/* Adicionar nova tarefa */}

        {/* Lista de tarefas */}
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}

      </div>
    </div>
  )
}

export default App
