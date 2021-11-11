import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {Pet} from './Pet';


import "./index.css";

const App = () => {
  const [pets, setPets] = useState([])

  useEffect( () => {
    // fetch("http://localhost:3001/pets")
    // .then( res => res.json())
    // .then( pets => setPets(pets));
    async function getData(){
      const res = await fetch("http://localhost:3001/pets")
      const pets = await res.json();
      setPets(pets);
    }
    getData();
  }, [] );

  return (
    <main>
      <h1>Adopt-a-Pet</h1>
      {/* <pre>{JSON.stringify(pets, null, 2)}</pre> */}
      
      <ul>
        {pets.map( (pet) => (
            <li key={pet.id} >
              <Pet pet={pet}/>

            </li>
        ))}
      </ul>
      <button>Add a Pet</button>
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
