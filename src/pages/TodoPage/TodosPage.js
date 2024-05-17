import React, {useState} from 'react';
import todo from "../../components/todo/Todo";
import Todo from "../../components/todo/Todo";

const TodosPage = () => {
    const [arr,setArr] = useState(["todo 1", "todo 2", "todo 3"])
    return (
        <div>
            {arr.map(todo=> <Todo flat = {todo}/>)}
        </div>
    );
};

export default TodosPage;