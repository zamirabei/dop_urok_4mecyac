import React, {useLayoutEffect, useState} from 'react';
import MainPage from './components/mainPage/MainPage'
import ErrorPage from './components/errorPage/ErrorPage'
const App = () => {
    const [paper, setPaper] = useState({
        name: '',
        lastname: ''
    })
    useLayoutEffect(() => {
        const lookName = prompt('Пожалуйста, введите ваше имя')
        const lookSurname = prompt('Пожалуйста введите фамилию')
        if (lookName !== null && lookSurname !== null){
            setPaper({name: lookName, lastname: lookSurname})
        }
    }, []);
    if(paper.name === 'John'&& paper.lastname === 'Johns'){
        return <MainPage user={paper}/>
    }
    else {
        return <ErrorPage user={paper}/>
    }
};

export default App;