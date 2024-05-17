import React from 'react';
import MainPage from "./pages/mainpage/MainPage";
import Todo from "./components/todo/Todo";
import About from "./pages/AboutPage/About";
import TodosPage from "./pages/TodoPage/TodosPage";

const App = () => {
    return (
        <div>
          <MainPage/>
            <About/>
            <TodosPage/>
        </div>
    );
};

export default App;