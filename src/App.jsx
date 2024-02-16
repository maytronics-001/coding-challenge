import { useState } from "react";

function App() {

  const [dogs, setDogs] = useState('');
  const [button, setButton] = useState(false);

  const ButtonData = () => {
   fetch('https://dog.ceo/api/breeds/image/random/20', {
      method : "GET"

    })
        .then(response => response.json())
        .then(data => setDogs(data.message))
  }

  return ( 
    <>
      <button onClick={ButtonData}>FETCH DOG</button>

      {dogs.map((dog, keyDog) => {
        return <img key={keyDog} src={dog} />
      })}
    </>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}

export default App
