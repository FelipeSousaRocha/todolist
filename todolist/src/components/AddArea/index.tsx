import { useState, KeyboardEvent } from "react";

type Props = {
    onEnter: (taskName: string) => void
} //propriedade que envia a string para o componente App

export function AddArea({onEnter}: Props) { //Envio para o Componente App a string digitada o input
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    } //Captura a tecla enter e verifica se o campo esta vazio

    return(
        <div className="flex items-center border border-solid border-gray-400 rounded-2xl p-2.5 my-5">
            <div className="mr-1.5">➕</div>
            <input
            type="text"
            placeholder="Adicione uma tarefa"
            className="border-0 bg-transparent outline-0 text-white text-base flex-1"
            defaultValue={inputText} //adiciona como valor o que foi digitado no input
            onChange={e=>setInputText(e.target.value)} //inseri o valor digitado no input
            onKeyUp={handleKeyUp} //captura a tecla
            />
        </div>
    );
}