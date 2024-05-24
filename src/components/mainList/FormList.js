import React, {useState} from 'react';

const FormList = () => {
    const [nameList, setNamelist] = useState('')
    const [nameList1, setNamelist1] = useState([])

    const saveName = (event) => {
        setNamelist(event.target.value);
    }
    const addName = () => {
        setNamelist1([...nameList1, nameList ])
        setNamelist('');
    }
    const editName = (id) => {
        const editArr = [...nameList1]
        editArr[id] = nameList;
        setNamelist1(editArr);
        setNamelist('');
    }
    return (
        <div>
            <input type="text" value={nameList} onChange={(e)=>saveName(e)}/>
            <button onClick={addName} disabled={!nameList}>'Добавить'</button>
            {
                nameList1.length > 0 ? (nameList1.map((list, idx)=>(
                    <div key={idx}>
                        <button disabled={!nameList} onClick={()=> editName(idx)}>Поменять</button>
                        <p>{list}</p>
                    </div>
                    )
                )):(<p>Cписок пуст</p>)
            }
        </div>
    );
};

export default FormList;