import React from 'react';
import About from "./components/about/About";
import Main from "./components/main/Main";
import Reff from "./pages1/ref/Reff";
import ModalProvider from "./pages1/context/ModalProvider";


const App = () => {

    return (
        <div>
            <ModalProvider>
                <About/>
                <Main/>
            </ModalProvider>
            <Reff/>
        </div>
    );
};
export default App;