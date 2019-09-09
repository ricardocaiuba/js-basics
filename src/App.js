import React from 'react';
import './App.css';

const App = () => {
    const firstName = "Ricardo";
    const lastName = "Rodrigues";
    const str = `Olá ${firstName} ${lastName}`;
    const valor = 10;

    const obj = {
        name: "Ricardo",
        lastName: "Rodrigues",
        address: {
            city: "Americana"
        }
    };

    const arr = [1, 2, 3, "Canjica"] ;

    const keys = Object.keys(obj) ;

    // high order functions
    keys.forEach(item => {
        console.log(`${item} - ${obj[item]} - `, obj[item]);
    });

    const values = keys.map(item => {
        return obj[item] ;
    }) ;
   

    console.log("keys.map: ", values) ;

    const names = ["Ricardo", "Rodrigues"] ;
    const namesElements = names.map(name => <p>{name}</p>) ;


    return (
        <div className="App">
            <header className="App-header">
                <p>Com Variáveis: {str} {valor}</p>
                <p>Com Objetos: {obj["name"]} {obj.lastName} - {obj.address.city}</p>
                <p>Vetor: {arr[0]}-{arr[1]}-{arr[2]}-{arr[3]}</p>
                <p>Object Keys: {keys.toString()} - {keys[0]} - {obj[keys[0]]}</p>
                {namesElements}
            </header>
        </div>
    );
}

export default App;
