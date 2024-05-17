import React from 'react';
import style from './description.module.css';


const Description = ({house}) => {
    return (
        <div>
            <p className={style.up}>{house.title}</p>
            <p className={style.next}>{house.description}</p>
        </div>
    );
};

export default Description;