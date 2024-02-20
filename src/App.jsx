import { useState } from "react"
import "./app.css"
function App() {

  const [dogs, setDogs] = useState([]);

  async function logDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20");
    const dogsResponse = await response.json();
    console.log(dogsResponse);
    setDogs(dogsResponse.message);

  }
  
  return (
    <div>
      <button className="js-btn" onClick={logDogs}> Fetch Dogs! </button>
      <div className="grid-container">
        {
          dogs.map((dog,index)=>{return <img className="grid-item" src={dog} key={index} alt="placeholder" />;})
        }
      </div>
    </div>
    
  )

  
}






export default App
