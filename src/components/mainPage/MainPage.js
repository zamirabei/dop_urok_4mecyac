import React from 'react';

const MainPage = ({user}) => {
    return (
        <div>
           <p>Добро пожаловать!{user.name}{user.lastname}Мы тебя ждали!</p>
        </div>
    );
};

export default MainPage;