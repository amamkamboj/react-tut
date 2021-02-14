import React, { useState } from "react";

import TodoListItems from "./TodoListItems";


const TodoList = ()=>{
    const [inputList, setInputList]=useState("");
    const [items, setItems] = useState([]); // convets items to array of items
    const InputEventTodo = (event)=>{
        setInputList(event.target.value);
    }
    const ListOfItems = ()=>{
        
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })
        setInputList(''); //Seting input value to empty
    }
    const deleteItems= (id)=>{
        console.log("delete");
        setItems((oldItems)=>{
            return oldItems.filter( (arrayElem,index)=>{
                return index !== id;
            } )
        })
    }


    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>Todo List</h1>
                <input type="text" name="" placeholder="Add a items" onChange={InputEventTodo} value={inputList} />
                <button onClick={ListOfItems}> + </button>

                <ol>
                    { items.map((itemVal,index)=>{
                        return(
                            <TodoListItems onSelect={deleteItems} key={index} id={index} text={itemVal} /> 
                        )
                       
                    }) }
                </ol>
            </div>
        </div>

        </>

    );


}

export default TodoList;