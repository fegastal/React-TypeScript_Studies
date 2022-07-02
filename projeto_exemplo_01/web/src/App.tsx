import React, { useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

    const [counter, setCounter] = useState(1);
    const [name, setName] = useState('');
    
    function handleButtonClick() {
        setCounter(counter + 1);
        
        setName(name);
        console.log(counter);
    }
    
    return (
        <>
            <Header title="Página Inicial" />
            <Header title="Outro" />
            <h1>Hello Dev!</h1>
            <p> { counter } </p>
            <button onClick={handleButtonClick}>Incrementar</button>
        </>
    );
}

export default App;