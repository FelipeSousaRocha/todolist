import { useState } from "react";
import { Item } from "../../types/Item";

type Props = {
  item: Item
}//Todas as propriedades que eu vou receber

export function ListItem({item}: Props) {//propriedade do tipo Props (Item) 
  const [isChecked, setIsChecked] = useState(item.done);

  return(
    <div className="flex">
      <input 
      type="checkbox" 
      className="w-7 h-7 mr-1.5" 
      checked={isChecked} 
      onChange={e => setIsChecked(e.target.checked)}
      />
      <label className={`text-gray ${isChecked? 'line-through' : 'list-none'}`}>
        {item.name}
      </label>
    </div>
  );
}