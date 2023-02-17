import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem/index";
import { AddArea } from "./components/AddArea";

function App() {
  //Estado chamado list
  const [list, setList] = useState<Item[]>([]); //Um Array te Item

  const handleAddTask = (taskName: string) => {
    var newList = [...list]; //Clona lista
    newList.push({
      id: list.length + 1, //Adiciona o ultimo id + 1
      name: taskName, //Pega a string recebida na funcao
      done: false
    });//Adiciona o novo item na lista
    setList(newList); //Atualiza lista
  }

  const handleRemoveTask = (index: number) => {
    var newList = [...list];
    newList.splice(index, 1);//remover o item
    setList([...newList]);
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="m-auto max-w-4xl p-2.5">
        <h1 className="m-0 p-0 text-white text-center border-b border-solid border-purple-neon pb-5 font-bold text-3xl mb-2.5">
        Lista de Tarefas
        </h1>

        {/* Adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask}/>{/* Recebo do componente o texto */}

        {/* Lista de tarefas */}
        {list.map((item, index)=>(
          <div className="flex bg-purple-200 p-2.5 rounded-lg mb-2.5">
            <ListItem key={item.id} item={item} /> {/*Lista cada item dentro do Array*/}
            <button className="pl-1" onClick={()=>handleRemoveTask(index)}>❌</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
