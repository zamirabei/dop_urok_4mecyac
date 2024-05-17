import React from 'react';
import style from './todo.module.css';
const Todo = ({flat}) => {
    return (
        <div>
          <p className={style.down}>{flat}</p>
        </div>
    );
};

export default Todo;