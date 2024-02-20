import './App.css'
import { useState } from 'react'
import axios from 'axios'


function App() {
  const [dogs,setDogs] = useState(null);

  const handleClick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random/20').then(res => setDogs(res.data.message)).catch(err => console.log('err',err))
  }

  return (<div className='flexContainer'>
    <button onClick={handleClick}>Click me</button>
    <div className="gridContainer">
      { dogs ? dogs.map((dog, index) => (<div key={index} className='gridItem'>
        <img src={dog} alt="" />
      </div>)) : <div>No dogs retrieved</div>}
    </div>
    </div>
  )
}

export default App
