"use client"
import { ChangeEvent, useState } from "react";
import { usePeapleList } from "../rededcerss-hooks/peapleList";

const Page =() => {
  const [list, dispatch] = usePeapleList(); 
  const [nameInput, setNameInput] = useState('');
  
  const hundleAddButton = () => {
    if(nameInput) {
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }
  const hundleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }
  const deletePerson = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: { id }
    })
  }
  const huandleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    })
  }
  return (
    <div className="p-5">
      <input className="border-2" type="text" value={nameInput} onChange={hundleInputChange} />
      <button onClick={hundleAddButton}>Adicionar</button>
      <hr/>
      <button onClick={huandleOrderButton}>Ordenar lista</button>
      <br/>
      lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deletePerson(item.id)}>[ deletar ]</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Page; //Precisa ter esse comando para ele se exportado e assim funcionar